import { Inter, Lusitana, Montserrat, Open_Sans } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })
export const lusitana = Lusitana({ weight: ["400", "700"], subsets: ["latin"] })
export const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin", 'cyrillic'] })
export const openSans = Open_Sans({ weight: ['300', "400", '600', "700"], subsets: ["latin"], display: 'auto', preload: true, adjustFontFallback: true })