import {ExternalLink, Github, Eye} from 'lucide-react';
import {ProjectItems} from "~/data/projectItems";
import {Card} from "~/components/ui/card";
import {Badge} from "~/components/ui/badge";
import {Button} from "~/components/ui/button";
import {ScrollArea} from "~/components/ui/scroll-area";

const Projects = () => {
    const projects = ProjectItems;
    const featuredProjects = projects.filter(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    return (
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
                Projects
            </h2>

            {/* Featured ProjectItems */}
            <div className="mb-12">
                <h3 className="text-2xl font-semibold text-white mb-6">Featured Projects</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {featuredProjects.map((project, index) => (
                        <Card
                            key={project.title}
                            className="bg-slate-800/50 backdrop-blur-sm border-slate-700 overflow-hidden group hover:bg-slate-700/50 transition-all duration-300 animate-fade-in"
                            style={{animationDelay: `${index * 200}ms`}}
                        >
                            <div className="aspect-video relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"/>
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-semibold text-white mb-3">{project.title}</h4>
                                <p className="text-slate-300 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech) => (
                                        <Badge
                                            key={tech}
                                            variant="secondary"
                                            className="bg-slate-700 text-slate-200"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                                <div className="flex gap-3">
                                    {project.liveUrl && project.liveUrl !== "#" && (
                                        <Button
                                            size="sm"
                                            className="bg-blue-600 hover:bg-blue-700"
                                            onClick={() => window.open(project.liveUrl, '_blank')}
                                        >
                                            <Eye className="w-4 h-4 mr-2"/>
                                            Live Demo
                                        </Button>
                                    )}
                                    {project.githubUrl && project.githubUrl !== "#" && (
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="border-slate-600 text-slate-200 hover:bg-slate-700"
                                            onClick={() => window.open(project.githubUrl, '_blank')}
                                        >
                                            <Github className="w-4 h-4 mr-2"/>
                                            Code
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Other ProjectItems */}
            <div className="pb-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Other Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherProjects.map((project, index) => (
                        <Card
                            key={project.title}
                            className="bg-slate-800/50 backdrop-blur-sm border-slate-700 overflow-hidden group hover:bg-slate-700/50 transition-all duration-300 animate-fade-in"
                            style={{animationDelay: `${(index + 2) * 150}ms`}}
                        >
                            <div className="aspect-video relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-4">
                                <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
                                <p className="text-slate-300 text-sm mb-3 line-clamp-2">{project.description}</p>
                                <div className="flex flex-wrap gap-1 mb-3">
                                    {project.technologies.slice(0, 3).map((tech) => (
                                        <Badge
                                            key={tech}
                                            variant="secondary"
                                            className="bg-slate-700 text-slate-200 text-xs"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <Badge variant="secondary" className="bg-slate-700 text-slate-200 text-xs">
                                            +{project.technologies.length - 3}
                                        </Badge>
                                    )}
                                </div>
                                <div className="flex gap-2">
                                    {project.liveUrl && project.liveUrl !== "#" && (
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            className="p-2 h-8 w-8 text-slate-300 hover:text-white"
                                            onClick={() => window.open(project.liveUrl, '_blank')}
                                        >
                                            <ExternalLink className="w-4 h-4"/>
                                        </Button>
                                    )}
                                    {project.githubUrl && project.githubUrl !== "#" && (
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            className="p-2 h-8 w-8 text-slate-300 hover:text-white"
                                            onClick={() => window.open(project.githubUrl, '_blank')}
                                        >
                                            <Github className="w-4 h-4"/>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;