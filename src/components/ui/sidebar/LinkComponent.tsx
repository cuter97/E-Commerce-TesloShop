import Link from "next/link";

interface Props {
    route: string;
    title: string;
    classname?: string;
    Icon: React.ElementType;
    size?: number;
}

export const LinkComponent = ({ route, title, classname, Icon, size = 30 }: Props) => {
    return (
        <Link
            href={`${route}`}
            className={`${classname} flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all`}
        >
            <Icon size={size} />
            <span className="ml-3 text-xl">{title}</span>
        </Link>
    )
}