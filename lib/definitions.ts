export type SignUpField = {
    name: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string | null;
}

export type LoginFields = {
    email: string;
    password: string;
    savePassword: boolean
}

export type Testimonials = {
    name: string
    text: string
    date: string
}

export type ContactFields = {
    name: string
    email: string
    message: string
} 

export type Services = {
    name: string
    desc: string
    img: string
}