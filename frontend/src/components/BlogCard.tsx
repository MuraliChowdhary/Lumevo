import { Link } from "react-router-dom";

interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publisherDate: string;
    id: number;
}

export const BlogCard = ({ authorName, title, content, publisherDate, id }: BlogCardProps) => {
    console.log("BlogCard Props:", { authorName, title, content, publisherDate, id });

    return (
        <Link to={`/blog/${id}`}>
            <div className="border-b p-2 border-slate-200 pb-4 cursor-pointer pt-5 pb-5">
                <div className="flex">
                    <div>
                        <Avator name={authorName || "Unknown"} size="small" />
                    </div>
                    <div className="font-extralight pl-3 text-sm flex justify-center flex-col">
                        {authorName || "Unknown"}
                    </div>
                    <div className="flex justify-center flex-col pl-1">
                        <Circle />
                    </div>
                    <div className="pl-1 font-thin text-slate-500 text-sm flex justify-center flex-col">
                        {publisherDate}
                    </div>
                </div>

                <div className="text-2xl font-bold">{title}</div>
                <div className="text-slate-600 text-md mb-3">{content.slice(0, 100) + "..."}</div>
                <div className="text-slate-500 text-sm font-thin">{`${Math.ceil(content.length / 100)} minutes`}</div>
            </div>
        </Link>
    );
};

function Circle() {
    return <div className="h-1 w-1 bg-slate-400 rounded-full"></div>;
}

export function Avator({ name = "?", size = "small" }: { name: string; size: "small" | "big" }) {
    return (
        <div className={`relative inline-flex items-center justify-center ${size === "small" ? "w-6 h-6" : "w-10 h-10"} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 cursor-pointer`}>
            <span className={`${size === "small" ? "text-sm" : "text-md"} font-Lumevo text-gray-600 dark:text-gray-300`}>
                {name?.[0] || "?"}
            </span>
        </div>
    );
}
