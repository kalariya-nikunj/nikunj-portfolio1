export type FileItem = {
    id: string;
    title: string;
    type: "folder" | "video" | "link" | "pdf" | "text" | "file";
    description?: string;
    url?: string;
    children?: FileItem[];
};

export const MY_DATA: FileItem[] = [
    {
        id: "hackathons", title: "Hackathons", type: "folder",
        description: "My top-ranking hackathon projects, showcasing rapid prototyping and AI development.",
        children: [
            {
                id: "h1", title: "Ingenium 6.0", type: "folder", description: "Secured Top 20 rank at Ahmedabad University.",
                children: [
                    {
                        id: "h1-p", title: "Photo", type: "folder",
                        children: [
                            { id: "h1-p1", title: "Image 1", type: "file", url: "/Ingenium%206.0/image1.png" },
                            { id: "h1-p2", title: "Image 2", type: "file", url: "/Ingenium%206.0/image2.png" },
                            { id: "h1-p3", title: "Image 3", type: "file", url: "/Ingenium%206.0/image3.png" }
                        ]
                    },
                    {
                        id: "h1-v", title: "Video", type: "folder",
                        children: [
                            { id: "h1-v1", title: "Video-1.mp4", type: "video", url: "/Ingenium%206.0/Video-1.mp4" }
                        ]
                    },
                    { id: "h1-d", title: "Project Demo Video", type: "video", url: "/Ingenium%206.0/Project%20Demo%20Video.mp4" },
                    { id: "h1-g", title: "GitHub Repo Link", type: "link", url: "https://github.com/your-username/your-repo-name" }
                ]
            },
            {
                id: "h3", title: "Ingenium 7.0", type: "folder", description: "Secured Top 20 rank.",
                children: [
                    {
                        id: "h3-p", title: "Photo", type: "folder",
                        children: [
                            { id: "h3-p1", title: "Image 1", type: "file", url: "/ingenium%207.0/image1.png" },
                            { id: "h3-p2", title: "Image 2", type: "file", url: "/ingenium%207.0/image2.png" },
                            { id: "h3-p3", title: "Image 3", type: "file", url: "/ingenium%207.0/image3.png" }
                        ]
                    },
                    {
                        id: "h3-v", title: "Video", type: "folder",
                        children: [
                            { id: "h3-v1", title: "Video1.mp4", type: "video", url: "/ingenium%207.0/Video1.mp4" }
                        ]
                    },
                    { id: "h3-d", title: "Project Demo Video", type: "video", url: "/ingenium%207.0/Project Demo Video.mp4" },
                    { id: "h3-g", title: "GitHub Repo Link", type: "link", url: "https://github.com/your-username/your-repo-name" }
                ]
            },
            {
                id: "h2", title: "LJ Hackathon", type: "folder", description: "Secured Top 10 rank.",
                children: [
                    {
                        id: "h2-p", title: "Photo", type: "folder",
                        children: [
                            { id: "h2-p1", title: "Image 1", type: "file", url: "/LJ%20Hackathon/image1.png" },
                            { id: "h2-p2", title: "Image 2", type: "file", url: "/LJ%20Hackathon/image2.png" },
                            { id: "h2-p3", title: "Image 3", type: "file", url: "/LJ%20Hackathon/image3.png" }
                        ]
                    },
                    {
                        id: "h2-v", title: "Video", type: "folder",
                        children: [
                            { id: "h2-v1", title: "Video1.mp4", type: "video", url: "/LJ%20Hackathon/Video1.mp4" }
                        ]
                    },
                    { id: "h2-d", title: "Project Demo Video", type: "video", url: "https://youtube.com/your-video-link-here" },
                    { id: "h2-g", title: "GitHub Repo Link", type: "link", url: "https://github.com/your-username/your-repo-name" }
                ]
            },
            {
                id: "h4", title: "GLS Hackathon", type: "folder", description: "Secured 1st Rank! Built a fully autonomous AI Agent.",
                children: [
                    {
                        id: "h4-p", title: "Photo", type: "folder",
                        children: [
                            { id: "h4-p1", title: "Image 1", type: "file", url: "/GLS%20Hackathon/image1.png" },
                            { id: "h4-p2", title: "Image 2", type: "file", url: "/GLS%20Hackathon/image2.png" },
                            { id: "h4-p3", title: "Image 3", type: "file", url: "/GLS%20Hackathon/image3.png" }
                        ]
                    },
                    {
                        id: "h4-v", title: "Video", type: "folder",
                        children: [
                            { id: "h4-v1", title: "Video1.mp4", type: "video", url: "/GLS%20Hackathon/Video1.mp4" },
                            { id: "h4-v2", title: "Video2.mp4", type: "video", url: "/GLS%20Hackathon/Video2.mp4" },
                            { id: "h4-v3", title: "Video3.mp4", type: "video", url: "/GLS%20Hackathon/Video3.mp4" },
                            { id: "h4-v4", title: "Video4.mp4", type: "video", url: "/GLS%20Hackathon/Video4.mp4" }
                        ]
                    },
                    { id: "h4-d", title: "Project Demo Video", type: "video", url: "https://youtube.com/your-video-link-here" },
                    { id: "h4-g", title: "GitHub Repo Link", type: "link", url: "https://github.com/your-username/your-repo-name" }
                ]
            }
        ]
    },
    {
        id: "events", title: "Events", type: "folder",
        description: "Competitions and technical events where I showcased physical builds.",
        children: [
            { id: "e1", title: "Robo Fest", type: "folder", description: "Built a gyro + voice control car.", children: [{ id: "e1-p", title: "Photos", type: "folder", children: [] }, { id: "e1-v", title: "Videos", type: "folder", children: [] }, { id: "e1-t1", title: "Event Details", type: "text" }, { id: "e1-t2", title: "Description of Achievements", type: "text" }] },
            { id: "e2", title: "IEEE Event (Tech Trek Relay)", type: "folder", description: "Secured 2nd prize overall.", children: [{ id: "e2-p", title: "Photos", type: "folder", children: [] }, { id: "e2-v", title: "Videos", type: "folder", children: [] }, { id: "e2-t1", title: "Event Details", type: "text" }, { id: "e2-t2", title: "Description of Achievements", type: "text" }] }
        ]
    },
    {
        id: "certificates", title: "Certificates", type: "folder",
        description: "Official documentation of my achievements.",
        children: [
            // 🟢 The 5 Certificates you have ready right now (with URLs linking to the public folder)
            { id: "c1", title: "Hackathon 6.0", type: "pdf", url: "/Certificates/hackathon6.pdf" },
            { id: "c4", title: "IEEE Cyber Security Workshop", type: "pdf", url: "/Certificates/cybersecurity.pdf" },
            { id: "c5", title: "STAPTHON English Certification", type: "pdf", url: "/Certificates/stapthon.pdf" },
            { id: "c6", title: "LJ Hackathon", type: "pdf", url: "/Certificates/ljhackathon.pdf" },
            { id: "c9", title: "Arduino UNO 2.0 Workshop", type: "pdf", url: "/Certificates/arduino.pdf" },
            { id: "c3", title: "IEEE Tech Trek Relay 2025", type: "pdf", url: "/Certificates/IEEETechTrekRelay.pdf" },

            // ⏳ The 4 Certificates you will add later (Currently missing the 'url' property)
            { id: "c2", title: "Hackathon 7.0", type: "pdf" },
            { id: "c7", title: "GLS 1st Rank", type: "pdf" },
            { id: "c8", title: "Robotics Tech Head", type: "pdf" }
        ]
    },
    {
        id: "projects", title: "Projects", type: "folder",
        description: "Academic and personal engineering projects spanning software and hardware.",
        children: [
            { id: "p1", title: "ENR107: Gyro + Voice Control Car", type: "folder", children: [{ id: "p1-p", title: "Photos", type: "folder", children: [] }, { id: "p1-v", title: "Videos", type: "folder", children: [] }] },
            { id: "p2", title: "Water FDP: Website Development", type: "folder", children: [{ id: "p2-p", title: "Photos", type: "folder", children: [] }, { id: "p2-v", title: "Videos", type: "folder", children: [] }] },
            { id: "p3", title: "ENR105: Bird House", type: "folder", children: [{ id: "p3-p", title: "Photos", type: "folder", children: [] }, { id: "p3-v", title: "Videos", type: "folder", children: [] }] },
            { id: "p4", title: "ENR206: Smart Smoke Detection", type: "folder", children: [{ id: "p4-p", title: "Photos", type: "folder", children: [] }, { id: "p4-v", title: "Videos", type: "folder", children: [] }] },
            { id: "p5", title: "ENR213: 16-bit ALU & Audio Filters", type: "folder", children: [{ id: "p5-p", title: "Photos", type: "folder", children: [] }, { id: "p5-v", title: "Videos", type: "folder", children: [] }] },
            { id: "p6", title: "CSE302: 32-bit RISC Microprocessor", type: "folder", children: [{ id: "p6-p", title: "Photos", type: "folder", children: [] }, { id: "p6-v", title: "Videos", type: "folder", children: [] }] },
            { id: "p7", title: "ENR215: Foldable & Portable Bridge", type: "folder", children: [{ id: "p7-p", title: "Photos", type: "folder", children: [] }, { id: "p7-v", title: "Videos", type: "folder", children: [] }] }
        ]
    },
    {
        id: "event-organize", title: "Event Organize", type: "folder",
        children: [
            { id: "eo1", title: "Arduino UNO 3.0 Workshop", type: "folder", description: "Organized by me at Ahmedabad University.", children: [{ id: "eo1-p", title: "Photos", type: "folder", children: [] }, { id: "eo1-v", title: "Videos", type: "folder", children: [] }, { id: "eo1-d", title: "Description", type: "text" }] }
        ]
    },
    { id: "resume", title: "Resume.pdf", type: "pdf", url: "/Resume.pdf" }
];