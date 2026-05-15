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
                    { id: "h3-d", title: "Project Demo Video", type: "video", url: "/ingenium%207.0/Project%20Demo%20Video.mp4" },
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
            {
                id: "e1", title: "Robo Fest", type: "folder", description: "Built a gyro + voice control car.",
                children: [
                    {
                        id: "e1-p", title: "Photos", type: "folder",
                        children: [
                            { id: "e1-p1", title: "Image 1", type: "file", url: "/Events/Robo%20Fest/image1.png" },
                            { id: "e1-p2", title: "Image 2", type: "file", url: "/Events/Robo%20Fest/image2.png" },
                            { id: "e1-p3", title: "Image 3", type: "file", url: "/Events/Robo%20Fest/image3.png" },
                            { id: "e1-p4", title: "Image 4", type: "file", url: "/Events/Robo%20Fest/image4.png" },
                            { id: "e1-p5", title: "Image 5", type: "file", url: "/Events/Robo%20Fest/image5.png" },
                            { id: "e1-p6", title: "Image 6", type: "file", url: "/Events/Robo%20Fest/image6.png" },
                            { id: "e1-p7", title: "Image 7", type: "file", url: "/Events/Robo%20Fest/image7.png" },
                            { id: "e1-p8", title: "Image 8", type: "file", url: "/Events/Robo%20Fest/image8.png" },
                            { id: "e1-p9", title: "Image 9", type: "file", url: "/Events/Robo%20Fest/image9.png" }
                        ]
                    },
                    {
                        id: "e1-v", title: "Videos", type: "folder",
                        children: [
                            { id: "e1-v1", title: "Video 1", type: "video", url: "/Events/Robo%20Fest/Video1.mp4" },
                            { id: "e1-v2", title: "Video 2", type: "video", url: "/Events/Robo%20Fest/Video2.mp4" },
                            { id: "e1-v3", title: "Video 3", type: "video", url: "/Events/Robo%20Fest/Video3.mp4" }
                        ]
                    },
                    { id: "e1-t1", title: "Event Details", type: "text" },
                    { id: "e1-t2", title: "Description of Achievements", type: "text" }
                ]
            },
            {
                id: "e2", title: "IEEE Event (Tech Trek Relay)", type: "folder", description: "Secured 2nd prize overall.",
                children: [
                    {
                        id: "e2-p", title: "Photos", type: "folder",
                        children: [
                            { id: "e2-p1", title: "Image 1", type: "file", url: "/Events/IEEE%20Event/image1.png" },
                            { id: "e2-p2", title: "Image 2", type: "file", url: "/Events/IEEE%20Event/image2.png" },
                            { id: "e2-p3", title: "Image 3", type: "file", url: "/Events/IEEE%20Event/image3.png" },
                            { id: "e2-p4", title: "Image 4", type: "file", url: "/Events/IEEE%20Event/image4.png" },
                            { id: "e2-p5", title: "Image 5", type: "file", url: "/Events/IEEE%20Event/image5.png" },
                            { id: "e2-p6", title: "Image 6", type: "file", url: "/Events/IEEE%20Event/image6.png" },
                            { id: "e2-p7", title: "Image 7", type: "file", url: "/Events/IEEE%20Event/image7.png" },
                            { id: "e2-p8", title: "Image 8", type: "file", url: "/Events/IEEE%20Event/image8.png" },
                            { id: "e2-p9", title: "Image 9", type: "file", url: "/Events/IEEE%20Event/image9.png" },
                            { id: "e2-p10", title: "Image 10", type: "file", url: "/Events/IEEE%20Event/image10.png" },
                        ]
                    },
                    {
                        id: "e2-v", title: "Videos", type: "folder",
                        children: [
                            { id: "e2-v1", title: "Video 1", type: "video", url: "/Events/IEEE%20Event/Video1.mp4" },
                            { id: "e2-v2", title: "Video 2", type: "video", url: "/Events/IEEE%20Event/Video2.mp4" },
                            { id: "e2-v3", title: "Video 3", type: "video", url: "/Events/IEEE%20Event/Video3.mp4" }
                        ]
                    },
                    { id: "e2-t1", title: "Event Details", type: "text" },
                    { id: "e2-t2", title: "Description of Achievements", type: "text" }
                ]
            }
        ]
    },
    {
        id: "certificates", title: "Certificates", type: "folder",
        description: "Official documentation of my achievements.",
        children: [
            { id: "c1", title: "Hackathon 6.0", type: "pdf", url: "/Certificates/hackathon6.pdf" },
            { id: "c4", title: "IEEE Cyber Security Workshop", type: "pdf", url: "/Certificates/cybersecurity.pdf" },
            { id: "c5", title: "STAPTHON English Certification", type: "pdf", url: "/Certificates/stapthon.pdf" },
            { id: "c6", title: "LJ Hackathon", type: "pdf", url: "/Certificates/ljhackathon.pdf" },
            { id: "c9", title: "Arduino UNO 2.0 Workshop", type: "pdf", url: "/Certificates/arduino.pdf" },
            { id: "c3", title: "IEEE Tech Trek Relay 2025", type: "pdf", url: "/Certificates/IEEETechTrekRelay.pdf" },
            { id: "c2", title: "Hackathon 7.0", type: "pdf" },
            { id: "c7", title: "GLS 1st Rank", type: "pdf" },
            { id: "c8", title: "Robotics Tech Head", type: "pdf" }
        ]
    },
    {
        id: "projects", title: "Projects", type: "folder",
        description: "Academic and personal engineering projects spanning software and hardware.",
        children: [
            {
                id: "p1", title: "ENR107: Gyro + Voice Control Car", type: "folder",
                children: [
                    {
                        id: "p1-p", title: "Photos", type: "folder",
                        children: [
                            { id: "p1-p1", title: "Image 1", type: "file", url: "/Projects/ENR107%20-%20Gyro%20%2B%20Voice%20Control%20Car/image1.png" },
                            { id: "p1-p2", title: "Image 2", type: "file", url: "/Projects/ENR107%20-%20Gyro%20%2B%20Voice%20Control%20Car/image2.png" },
                            { id: "p1-p3", title: "Image 3", type: "file", url: "/Projects/ENR107%20-%20Gyro%20%2B%20Voice%20Control%20Car/image3.png" },
                            { id: "p1-p4", title: "Image 4", type: "file", url: "/Projects/ENR107%20-%20Gyro%20%2B%20Voice%20Control%20Car/image4.png" },
                            { id: "p1-p5", title: "Image 5", type: "file", url: "/Projects/ENR107%20-%20Gyro%20%2B%20Voice%20Control%20Car/image5.png" }
                        ]
                    },
                    {
                        id: "p1-v", title: "Videos", type: "folder",
                        children: [
                            { id: "p1-v1", title: "Video 1", type: "video", url: "/Projects/ENR107%20-%20Gyro%20%2B%20Voice%20Control%20Car/Video1.mp4" },
                            { id: "p1-v2", title: "Video 2", type: "video", url: "/Projects/ENR107%20-%20Gyro%20%2B%20Voice%20Control%20Car/Video2.mp4" },
                            { id: "p1-v3", title: "Video 3", type: "video", url: "/Projects/ENR107%20-%20Gyro%20%2B%20Voice%20Control%20Car/Video3.mp4" },
                            { id: "p1-v4", title: "Video 4", type: "video", url: "/Projects/ENR107%20-%20Gyro%20%2B%20Voice%20Control%20Car/Video4.mp4" },
                            { id: "p1-v5", title: "Video 5", type: "video", url: "/Projects/ENR107%20-%20Gyro%20%2B%20Voice%20Control%20Car/Video5.mp4" },
                        ]
                    }
                ]
            },
            {
                id: "p2", title: "Water FDP: Website Development", type: "folder",
                children: [
                    {
                        id: "p2-p", title: "Photos", type: "folder",
                        children: [
                            { id: "p2-p1", title: "Image 1", type: "file", url: "/Projects/Water%20FDP%20-%20Website%20Development/image1.png" },
                            { id: "p2-p2", title: "Image 2", type: "file", url: "/Projects/Water%20FDP%20-%20Website%20Development/image2.png" },
                            { id: "p2-p3", title: "Image 3", type: "file", url: "/Projects/Water%20FDP%20-%20Website%20Development/image3.png" },
                            { id: "p2-p4", title: "Image 4", type: "file", url: "/Projects/Water%20FDP%20-%20Website%20Development/image4.png" },
                            { id: "p2-p5", title: "Image 5", type: "file", url: "/Projects/Water%20FDP%20-%20Website%20Development/image5.png" },
                            { id: "p2-p6", title: "Image 6", type: "file", url: "/Projects/Water%20FDP%20-%20Website%20Development/image6.png" },
                            { id: "p2-p7", title: "Image 7", type: "file", url: "/Projects/Water%20FDP%20-%20Website%20Development/image7.png" }
                        ]
                    },
                    {
                        id: "p2-v", title: "Videos", type: "folder",
                        children: [
                            { id: "p2-v1", title: "Video 1", type: "video", url: "/Projects/Water%20FDP%20-%20Website%20Development/Video1.mp4" },
                            { id: "p2-v2", title: "Video 2", type: "video", url: "/Projects/Water%20FDP%20-%20Website%20Development/Video2.mp4" },
                            { id: "p2-v3", title: "Video 3", type: "video", url: "/Projects/Water%20FDP%20-%20Website%20Development/Video3.mp4" },
                            { id: "p2-v4", title: "Video 4", type: "video", url: "/Projects/Water%20FDP%20-%20Website%20Development/Video4.mp4" },
                            { id: "p2-v5", title: "Video 5", type: "video", url: "/Projects/Water%20FDP%20-%20Website%20Development/Video5.mp4" }
                        ]
                    }
                ]
            },
            {
                id: "p3", title: "ENR105: Bird House", type: "folder",
                children: [
                    {
                        id: "p3-p", title: "Photos", type: "folder",
                        children: [
                            { id: "p3-p1", title: "Image 1", type: "file", url: "/Projects/ENR105%20-%20Bird%20House/image1.png" },
                            { id: "p3-p2", title: "Image 2", type: "file", url: "/Projects/ENR105%20-%20Bird%20House/image2.png" },
                            { id: "p3-p3", title: "Image 3", type: "file", url: "/Projects/ENR105%20-%20Bird%20House/image3.png" },
                            { id: "p3-p4", title: "Image 4", type: "file", url: "/Projects/ENR105%20-%20Bird%20House/image4.png" },
                            { id: "p3-p5", title: "Image 5", type: "file", url: "/Projects/ENR105%20-%20Bird%20House/image5.png" }
                        ]
                    },
                    {
                        id: "p3-v", title: "Videos", type: "folder",
                        children: [
                            { id: "p3-v1", title: "Video 1", type: "video", url: "/Projects/ENR105%20-%20Bird%20House/Video1.mp4" }
                        ]
                    }
                ]
            },
            {
                id: "p4", title: "ENR206: Smart Smoke Detection", type: "folder",
                children: [
                    {
                        id: "p4-p", title: "Photos", type: "folder",
                        children: [
                            { id: "p4-p1", title: "Image 1", type: "file", url: "/Projects/ENR206%20-%20Smart%20Smoke%20Detection/image1.png" },
                            { id: "p4-p2", title: "Image 2", type: "file", url: "/Projects/ENR206%20-%20Smart%20Smoke%20Detection/image2.png" },
                            { id: "p4-p3", title: "Image 3", type: "file", url: "/Projects/ENR206%20-%20Smart%20Smoke%20Detection/image3.png" },
                            { id: "p4-p4", title: "Image 4", type: "file", url: "/Projects/ENR206%20-%20Smart%20Smoke%20Detection/image4.png" },
                            { id: "p4-p5", title: "Image 5", type: "file", url: "/Projects/ENR206%20-%20Smart%20Smoke%20Detection/image5.png" },
                            { id: "p4-p6", title: "Image 6", type: "file", url: "/Projects/ENR206%20-%20Smart%20Smoke%20Detection/image6.png" },
                            { id: "p4-p7", title: "Image 7", type: "file", url: "/Projects/ENR206%20-%20Smart%20Smoke%20Detection/image7.png" },
                            { id: "p4-p8", title: "Image 8", type: "file", url: "/Projects/ENR206%20-%20Smart%20Smoke%20Detection/image8.png" },
                            { id: "p4-p9", title: "Image 9", type: "file", url: "/Projects/ENR206%20-%20Smart%20Smoke%20Detection/image9.png" }
                        ]
                    },
                    {
                        id: "p4-v", title: "Videos", type: "folder",
                        children: [
                            { id: "p4-v1", title: "Video 1", type: "video", url: "/Projects/ENR206%20-%20Smart%20Smoke%20Detection/Video1.mp4" },
                            { id: "p4-v2", title: "Video 2", type: "video", url: "/Projects/ENR206%20-%20Smart%20Smoke%20Detection/Video2.mp4" }
                        ]
                    }
                ]
            },
            {
                id: "p5", title: "ENR213: 16-bit ALU & Audio Filters", type: "folder",
                children: [
                    {
                        id: "p5-p", title: "Photos", type: "folder",
                        children: [
                            { id: "p5-p1", title: "Image 1", type: "file", url: "/Projects/ENR213%20-%2016-bit%20ALU%20%26%20Audio%20Filters/image1.png" },
                            { id: "p5-p2", title: "Image 2", type: "file", url: "/Projects/ENR213%20-%2016-bit%20ALU%20%26%20Audio%20Filters/image2.png" },
                            { id: "p5-p3", title: "Image 3", type: "file", url: "/Projects/ENR213%20-%2016-bit%20ALU%20%26%20Audio%20Filters/image3.png" },
                            { id: "p5-p4", title: "Image 4", type: "file", url: "/Projects/ENR213%20-%2016-bit%20ALU%20%26%20Audio%20Filters/image4.png" },
                            { id: "p5-p5", title: "Image 5", type: "file", url: "/Projects/ENR213%20-%2016-bit%20ALU%20%26%20Audio%20Filters/image5.png" },
                            { id: "p5-p6", title: "Image 6", type: "file", url: "/Projects/ENR213%20-%2016-bit%20ALU%20%26%20Audio%20Filters/image6.png" },
                            { id: "p5-p7", title: "Image 7", type: "file", url: "/Projects/ENR213%20-%2016-bit%20ALU%20%26%20Audio%20Filters/image7.png" },
                            { id: "p5-p8", title: "Image 8", type: "file", url: "/Projects/ENR213%20-%2016-bit%20ALU%20%26%20Audio%20Filters/image8.png" },
                            { id: "p5-p9", title: "Image 9", type: "file", url: "/Projects/ENR213%20-%2016-bit%20ALU%20%26%20Audio%20Filters/image9.png" }
                        ]
                    },
                    {
                        id: "p5-v", title: "Videos", type: "folder",
                        children: [
                            { id: "p5-v1", title: "Video 1", type: "video", url: "/Projects/ENR213%20-%2016-bit%20ALU%20%26%20Audio%20Filters/Video1.mp4" },
                            { id: "p5-v2", title: "Video 2", type: "video", url: "/Projects/ENR213%20-%2016-bit%20ALU%20%26%20Audio%20Filters/Video2.mp4" }
                        ]
                    }
                ]
            },
            {
                id: "p6", title: "CSE302: 32-bit RISC Microprocessor", type: "folder",
                children: [
                    {
                        id: "p6-p", title: "Photos", type: "folder",
                        children: [
                            { id: "p6-p1", title: "Image 1", type: "file", url: "/Projects/CSE302%20-%2032-bit%20RISC%20Microprocessor/image1.png" },
                            { id: "p6-p2", title: "Image 2", type: "file", url: "/Projects/CSE302%20-%2032-bit%20RISC%20Microprocessor/image2.png" },
                            { id: "p6-p3", title: "Image 3", type: "file", url: "/Projects/CSE302%20-%2032-bit%20RISC%20Microprocessor/image3.png" },
                            { id: "p6-p4", title: "Image 4", type: "file", url: "/Projects/CSE302%20-%2032-bit%20RISC%20Microprocessor/image4.png" },
                            { id: "p6-p5", title: "Image 5", type: "file", url: "/Projects/CSE302%20-%2032-bit%20RISC%20Microprocessor/image5.png" },
                            { id: "p6-p6", title: "Image 6", type: "file", url: "/Projects/CSE302%20-%2032-bit%20RISC%20Microprocessor/image6.png" },
                            { id: "p6-p7", title: "Image 7", type: "file", url: "/Projects/CSE302%20-%2032-bit%20RISC%20Microprocessor/image7.png" },
                            { id: "p6-p8", title: "Image 8", type: "file", url: "/Projects/CSE302%20-%2032-bit%20RISC%20Microprocessor/image8.png" },
                            { id: "p6-p9", title: "Image 9", type: "file", url: "/Projects/CSE302%20-%2032-bit%20RISC%20Microprocessor/image9.png" }
                        ]
                    },
                    {
                        id: "p6-v", title: "Videos", type: "folder",
                        children: [
                            { id: "p6-v1", title: "Video 1", type: "video", url: "/Projects/CSE302%20-%2032-bit%20RISC%20Microprocessor/Video1.mp4" },
                            { id: "p6-v2", title: "Video 2", type: "video", url: "/Projects/CSE302%20-%2032-bit%20RISC%20Microprocessor/Video2.mp4" }
                        ]
                    }
                ]
            },
            {
                id: "p7", title: "ENR215: Foldable & Portable Bridge", type: "folder",
                children: [
                    {
                        id: "p7-p", title: "Photos", type: "folder",
                        children: [
                            { id: "p7-p1", title: "Image 1", type: "file", url: "/Projects/ENR215%20-%20Foldable%20%26%20Portable%20Bridge/image1.png" },
                            { id: "p7-p2", title: "Image 2", type: "file", url: "/Projects/ENR215%20-%20Foldable%20%26%20Portable%20Bridge/image2.png" },
                            { id: "p7-p3", title: "Image 3", type: "file", url: "/Projects/ENR215%20-%20Foldable%20%26%20Portable%20Bridge/image3.png" },
                            { id: "p7-p4", title: "Image 4", type: "file", url: "/Projects/ENR215%20-%20Foldable%20%26%20Portable%20Bridge/image4.png" },
                            { id: "p7-p5", title: "Image 5", type: "file", url: "/Projects/ENR215%20-%20Foldable%20%26%20Portable%20Bridge/image5.png" },
                            { id: "p7-p6", title: "Image 6", type: "file", url: "/Projects/ENR215%20-%20Foldable%20%26%20Portable%20Bridge/image6.png" },
                            { id: "p7-p7", title: "Image 7", type: "file", url: "/Projects/ENR215%20-%20Foldable%20%26%20Portable%20Bridge/image7.png" },
                            { id: "p7-p8", title: "Image 8", type: "file", url: "/Projects/ENR215%20-%20Foldable%20%26%20Portable%20Bridge/image8.png" },
                            { id: "p7-p9", title: "Image 9", type: "file", url: "/Projects/ENR215%20-%20Foldable%20%26%20Portable%20Bridge/image9.png" }
                        ]
                    },
                    {
                        id: "p7-v", title: "Videos", type: "folder",
                        children: [
                            { id: "p7-v1", title: "Video 1", type: "video", url: "/Projects/ENR215%20-%20Foldable%20%26%20Portable%20Bridge/Video1.mp4" },
                            { id: "p7-v2", title: "Video 2", type: "video", url: "/Projects/ENR215%20-%20Foldable%20%26%20Portable%20Bridge/Video2.mp4" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "event-organize", title: "Event Organize", type: "folder",
        children: [
            {
                id: "eo1", title: "Arduino UNO 3.0 Workshop", type: "folder", description: "Organized by me at Ahmedabad University.",
                children: [
                    {
                        id: "eo1-p", title: "Photos", type: "folder",
                        children: [
                            { id: "eo1-p1", title: "Image 1", type: "file", url: "/Event%20Organize/image1.png" },
                            { id: "eo1-p2", title: "Image 2", type: "file", url: "/Event%20Organize/image2.png" },
                            { id: "eo1-p3", title: "Image 3", type: "file", url: "/Event%20Organize/image3.png" },
                            { id: "eo1-p4", title: "Image 4", type: "file", url: "/Event%20Organize/image4.png" },
                            { id: "eo1-p5", title: "Image 5", type: "file", url: "/Event%20Organize/image5.png" }
                        ]
                    },
                    {
                        id: "eo1-v", title: "Videos", type: "folder",
                        children: [
                            { id: "eo1-v1", title: "Video 1", type: "video", url: "/Event%20Organize/Video1.mp4" }
                        ]
                    },
                ]
            }
        ]
    },
    { id: "resume", title: "Resume.pdf", type: "pdf", url: "/Resume.pdf" }
];