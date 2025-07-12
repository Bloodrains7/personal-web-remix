

import {Download, Send} from 'lucide-react';
import {ContactInfo} from "~/data/contactInfo";
import {SocialLinks} from "~/data/socialLinks";
import {Card} from "~/components/ui/card";
import {Button} from "~/components/ui/button";
import {Input} from "~/components/ui/input";
import {Textarea} from "~/components/ui/textarea";
import { ScrollArea } from './ui/scroll-area';

const Contacts = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
                Get In Touch
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="space-y-6">
                    <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 p-6">
                        <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
                        <p className="text-slate-300 mb-6">
                            I'm always interested in new opportunities and exciting projects.
                            Whether you have a question or just want to say hi, feel free to reach out!
                        </p>

                        <div className="space-y-4">
                            {ContactInfo.map((contact, index) => (
                                <div
                                    key={contact.label}
                                    className="flex items-center space-x-3 p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors animate-fade-in"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <contact.icon className="w-5 h-5 text-blue-400" />
                                    <div>
                                        <div className="text-sm text-slate-400">{contact.label}</div>
                                        <a
                                            href={contact.link}
                                            className="text-white hover:text-blue-400 transition-colors"
                                        >
                                            {contact.value}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Social Links */}
                    <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
                        <div className="flex space-x-4">
                            {SocialLinks.map((social, index) => (
                                <a
                                    key={social.label}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all text-slate-300 ${social.color} animate-fade-in`}
                                    style={{ animationDelay: `${(index + 3) * 100}ms` }}
                                >
                                    <social.icon className="w-6 h-6" />
                                </a>
                            ))}
                        </div>
                    </Card>

                    {/* Download CV */}
                    {/*<Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border-blue-500/30 p-6">*/}
                    {/*    <div className="flex items-center justify-between">*/}
                    {/*        <div>*/}
                    {/*            <h3 className="text-xl font-semibold text-white mb-2">Download CV</h3>*/}
                    {/*            <p className="text-slate-300 text-sm">Get my full resume in PDF format</p>*/}
                    {/*        </div>*/}
                    {/*        <Button className="bg-blue-600 hover:bg-blue-700">*/}
                    {/*            <Download className="w-4 h-4 mr-2" />*/}
                    {/*            Download*/}
                    {/*        </Button>*/}
                    {/*    </div>*/}
                    {/*</Card>*/}
                </div>

                {/* Contact Form */}
                <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 p-6">
                    <h3 className="text-2xl font-semibold text-white mb-6">Send Message</h3>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                    First Name
                                </label>
                                <Input
                                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                                    placeholder="John"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                    Last Name
                                </label>
                                <Input
                                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Email
                            </label>
                            <Input
                                type="email"
                                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Subject
                            </label>
                            <Input
                                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                                placeholder="Project Inquiry"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Message
                            </label>
                            <Textarea
                                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 min-h-[120px]"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default Contacts;