import { titleFont } from "@/config/fonts";

export default function Home() {
    return (
        <main className="">
            <h1>hola mundo</h1>
            <h1 className={titleFont.className}>hola mundo</h1>
        </main>
    );
}