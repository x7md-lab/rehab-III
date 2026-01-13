
const fs = require('fs');
const path = require('path');

const videosPath = path.join(process.cwd(), 'public', 'videos.json');
const projectDataPath = path.join(process.cwd(), 'src', 'lib', 'projectData.ts');

const rawData = fs.readFileSync(videosPath, 'utf-8');
const videoGroups = JSON.parse(rawData);

// Flatten the array of arrays
const videos = videoGroups.flat();

// Filter videos
const relevantVideos = videos.filter(v => {
    const text = (v.title + ' ' + v.details).toLowerCase();
    return text.includes('1446') || text.includes('1445');
});

function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\u0600-\u06FF\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}

function getYouTubeID(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

const newProjects = relevantVideos.map(v => {
    const ytId = getYouTubeID(v.url);
    const thumb = ytId ? `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg` : '/images/placeholder.jpg';
    
    // Generate slug
    let slug = slugify(v.title);
    if (!slug) slug = `project-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    return {
        id: slug,
        slug: slug,
        title: v.title,
        description: v.details.substring(0, 150) + '...',
        content: v.details,
        videoUrl: v.url,
        heroImage: thumb,
        galleryImages: [] 
    };
});

// Read existing projectData.ts
let projectDataContent = fs.readFileSync(projectDataPath, 'utf-8');

// Update Interface
const newInterface = `export interface ProjectData {
  id: string;
  slug: string;
  titleKey?: string;
  descKey?: string;
  contentKey?: string;
  title?: string;
  description?: string;
  content?: string;
  videoUrl?: string;
  heroImage: string | ImageMetadata;
  galleryImages: (string | ImageMetadata)[];
}`;

// Try to find the existing interface to replace it
const interfaceRegex = /export interface ProjectData \{[\s\S]*?\}/;
if (interfaceRegex.test(projectDataContent)) {
    projectDataContent = projectDataContent.replace(interfaceRegex, newInterface);
} else {
    console.log("Could not find interface to replace");
}


// Prepare new projects string
const newProjectsString = newProjects.map(p => {
    return `  {
    id: ${JSON.stringify(p.id)},
    slug: ${JSON.stringify(p.slug)},
    title: ${JSON.stringify(p.title)},
    description: ${JSON.stringify(p.description)},
    content: ${JSON.stringify(p.content)},
    videoUrl: ${JSON.stringify(p.videoUrl)},
    heroImage: ${JSON.stringify(p.heroImage)},
    galleryImages: []
  }`;
}).join(',\n');

// Append to projectsData array
const lastBracketIndex = projectDataContent.lastIndexOf('];');
if (lastBracketIndex !== -1) {
    const arrayContent = projectDataContent.substring(0, lastBracketIndex);
    const hasItems = arrayContent.trim().endsWith('}');
    
    const insertString = (hasItems ? ',\n' : '') + newProjectsString;
    
    const newContent = projectDataContent.slice(0, lastBracketIndex) + insertString + projectDataContent.slice(lastBracketIndex);
    
    fs.writeFileSync(projectDataPath, newContent, 'utf-8');
    console.log('Updated projectData.ts successfully');
} else {
    console.error('Could not find projectsData array closing bracket');
}
