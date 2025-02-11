export interface TeamMember {
    name: string;
    role: string;
    description: string;
}

export const teamMembers: TeamMember[] = [
    {
        name: "Ana García",
        role: "Desarrolladora Frontend",
        description: "Estudiante de Ingeniería Informática, especializada en React y diseño UI/UX."
    },
    {
        name: "Carlos Rodríguez",
        role: "Desarrollador Backend",
        description: "Estudiante de Ciencias de la Computación, experto en Node.js y bases de datos."
    },
    {
        name: "Laura Martínez",
        role: "Diseñadora UX/UI",
        description: "Estudiante de Diseño Gráfico, apasionada por la experiencia de usuario y la accesibilidad."
    },
    {
        name: "Miguel Sánchez",
        role: "Desarrollador Full Stack",
        description: "Estudiante de Ingeniería de Software, con experiencia en React y Laravel."
    }
];
