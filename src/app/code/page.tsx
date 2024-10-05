'use client';

import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import RepoCard from './components/repo-card';

interface Repository {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
}

export default function GitHubRepos() {
    redirect('/');
    const [repos, setRepos] = useState<Repository[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch('https://api.github.com/users/lademir/repos');
                if (!response.ok) {
                    throw new Error('Falha ao buscar repositórios');
                }
                const data = await response.json();
                setRepos(data);
                setLoading(false);
            } catch (err) {
                setError('Erro ao carregar repositórios');
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Repositórios públicos de lademir</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {repos.map((repo) => (
                    <RepoCard
                        key={repo.id}
                        id={repo.id}
                        name={repo.name}
                        description={repo.description || 'Sem descrição'}
                        html_url={repo.html_url}
                    />
                ))}
            </div>
        </div>
    );
}
