import CvCard from './components/cv-card';

export default function Curriculum() {
    // redirect('/');
    const UnderCertificate = "/documento.pdf";
    return (
        <div className="max-w-4xl mx-auto p-8 bg-background text-foreground">
            <header className="mb-8 text-center">
                <h1 className="text-4xl font-bold mb-2">Lademir Júnior</h1>
                {/* <p className="text-xl">Desenvolvedor Web Full Stack</p> */}
            </header>

            <main>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 border-b border-foreground/20 pb-2">Education</h2>
                    <CvCard
                        title="Bachelor Degree in Computer Science"
                        company="Federal University of Viçosa (UFV)"
                        period="Mar 2020 - Sep 2024"
                        responsibilities={[
                            "Thesis: Project Scheduling Problem in events assembly context.",
                            "Graduation with average 8.91.",
                        ]}
                        links={[
                            { link: "/TCC_Lademir_ultima.pdf", linkText: "Thesis" },
                            { link: "/historico-oficial.pdf", linkText: "History" }
                        ]}
                    />
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 border-b border-foreground/20 pb-2">Awards and Honors</h2>
                    <CvCard
                        title="Silver Presidente Bernardes Medal"
                        company="Federal University of Viçosa (UFV)"
                        period="Sep 2024"
                        responsibilities={[
                            "Awarded for achieving the highest GPA in the Computer Science course at the Federal University of Viçosa (UFV).",
                        ]}
                    />
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 border-b border-foreground/20 pb-2">Work Experience</h2>
                    <CvCard
                        title="Freelancer FullStack Developer"
                        company="Freelancer"
                        period="Aug 2024 - Present"
                        responsibilities={[
                            "Development of web applications using Next.js and React.",
                            "Implementation of RESTful APIs with Node.js and Nest.js"
                        ]}
                    />

                    <CvCard
                        title="Undergraduate Research Scholarship PIBITI/PIBIC/CNPq"
                        company="Federal University of Viçosa (UFV)"
                        period="Aug 2023 - Sep 2024"
                        responsibilities={[
                            "Contributes to the development of a web application that performs optimization of well-known computational problems.",
                            "Problems: Traveling Salesman Problem, Rich Vehicle Routing Problem with Time Windows and Compacting routes of the problem.",
                            "Technologies: Vite.js, Django, Docker, C++,  OpenStreet Routing Machine, Celery and PuLP."
                        ]}
                        links={[
                            { link: UnderCertificate, linkText: "Certificate" }
                        ]}
                    />

                    <CvCard
                        title="FullStack Developer"
                        company="Forme Seguro"
                        period='Oct 2022 - Apr 2023'
                        responsibilities={[
                            "Guided trainee in the development of web applications using React and Next.js",
                            "Implementation of RESTful APIs with Node.js, Nest.js, PHP and Laravel",
                            "Implementation of mobile applications using React Native",
                        ]}
                    />
                    {/* inmediam  */}

                    <CvCard
                        title="FullStack Developer Intern"
                        company='InMediam'
                        period='Aug 2021 - Sep 2022'
                        responsibilities={[
                            "Development of mobile application using Flutter",
                            "Implementation of RESTful APIs with PHP and Laravel",
                            "Development of many web applications using Next.js and React",
                            "Using of Design Patterns, Clean Architecture and SOLID principles"
                        ]}
                    />
                    {/* nobugs  */}

                    <CvCard
                        title="Data Analyst and Software Developer's Assistant"
                        company='NoBugs - Junior Enterprise of the Federal University of Viçosa (UFV)'
                        period='Jun 2020 - Sep 2022'
                        responsibilities={[
                            "Power BI to create reports and dashboards",

                            "Development of many web applications using Next.js and React",

                        ]}
                    />
                </section>


                <section>
                    <h2 className="text-2xl font-semibold mb-4 border-b border-foreground/20 pb-2">Habilidades</h2>
                    <ul className="grid grid-cols-2 gap-2">
                        <li className="bg-foreground/10 rounded-full px-3 py-1 text-sm">JavaScript</li>
                        <li className="bg-foreground/10 rounded-full px-3 py-1 text-sm">TypeScript</li>
                        <li className="bg-foreground/10 rounded-full px-3 py-1 text-sm">React</li>
                        <li className="bg-foreground/10 rounded-full px-3 py-1 text-sm">Next.js</li>
                        <li className="bg-foreground/10 rounded-full px-3 py-1 text-sm">Node.js</li>
                        <li className="bg-foreground/10 rounded-full px-3 py-1 text-sm">Express</li>
                        <li className="bg-foreground/10 rounded-full px-3 py-1 text-sm">SQL</li>
                        <li className="bg-foreground/10 rounded-full px-3 py-1 text-sm">Git</li>
                    </ul>
                </section>
            </main>
        </div>
    );
}
