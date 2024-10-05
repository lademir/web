import { redirect } from "next/navigation";


export default function Curriculum() {
    redirect('/');
    return (
        <div className="max-w-4xl mx-auto p-8 bg-background text-foreground">
            <header className="mb-8 text-center">
                <h1 className="text-4xl font-bold mb-2">Seu Nome</h1>
                <p className="text-xl">Desenvolvedor Web Full Stack</p>
            </header>

            <main>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 border-b border-foreground/20 pb-2">Resumo Profissional</h2>
                    <p>
                        Desenvolvedor web apaixonado com experiência em criar aplicações web modernas e responsivas.
                        Especializado em React, Next.js e Node.js, com forte conhecimento em TypeScript e práticas de UI/UX.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 border-b border-foreground/20 pb-2">Experiência</h2>
                    <div className="mb-4">
                        <h3 className="text-xl font-medium">Desenvolvedor Full Stack - Empresa XYZ</h3>
                        <p className="text-sm text-foreground/70">Janeiro 2020 - Presente</p>
                        <ul className="list-disc list-inside mt-2">
                            <li>Desenvolvimento de aplicações web usando React e Next.js</li>
                            <li>Implementação de APIs RESTful com Node.js e Express</li>
                            <li>Otimização de performance e SEO para aplicações web</li>
                        </ul>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 border-b border-foreground/20 pb-2">Educação</h2>
                    <div>
                        <h3 className="text-xl font-medium">Bacharelado em Ciência da Computação</h3>
                        <p className="text-sm text-foreground/70">Universidade ABC, 2016 - 2020</p>
                    </div>
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
