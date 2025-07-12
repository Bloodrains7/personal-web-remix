import {Code2, FileText, Mail, User} from "lucide-react";

export const MenuItems = [
    { id: 'about', label: 'About Me', icon: User, color: 'from-blue-500 to-purple-600' },
    { id: 'resume', label: 'Resume', icon: FileText, color: 'from-purple-500 to-pink-600' },
    { id: 'projects', label: 'Projects', icon: Code2, color: 'from-pink-500 to-red-600' },
    { id: 'contacts', label: 'Contacts', icon: Mail, color: 'from-red-500 to-orange-600' },
];
