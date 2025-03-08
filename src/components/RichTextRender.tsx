import React, { Fragment } from "react";
import escapeHTML from "escape-html";
import { Text } from "slate";
import { API_URL } from "../Constants/config";

interface UploadValue {
    url: string,
    filename: string
}

interface RichTextChild {
    text?: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    code?: boolean;
    children?: RichTextChild[];
    type?: string;
    url?: string;
    value?: UploadValue
}

interface RichTextBlock {
    children: RichTextChild[];
    type?: string;
}

interface RichTextRendererProps {
    content: RichTextBlock[];
}

const RichTextRenderer: React.FC<RichTextRendererProps> = ({ content }) => {

    const serialize = (children: RichTextChild[] | undefined) =>
        children && children.map((node: RichTextChild, i: number) => {
            if (Text.isText(node)) {
                let text = (
                    <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />
                );

                if ("bold" in node) {
                    text = <strong key={i}>{text}</strong>;
                }

                if ("code" in node) {
                    text = <code key={i}>{text}</code>;
                }

                if ("italic" in node) {
                    text = <em key={i}>{text}</em>;
                }

                if ("underline" in node) {
                    text = <u key={i}>{text}</u>;
                }

                if (node.text === '') {
                    text = <br />;
                }

                return <Fragment key={i}>{text}</Fragment>;
            }

            if (!node) {
                return null;
            }

            switch (node.type) {
                case "h1":
                    return <h1 key={i} className="text-4xl font-bold my-4">{serialize(node.children)}</h1>;
                case "h2":
                    return <h1 key={i} className="text-3xl font-bold my-4">{serialize(node.children)}</h1>;
                case "h3":
                    return <h1 key={i} className="text-2xl font-bold my-4">{serialize(node.children)}</h1>;
                case "h4":
                    return <h1 key={i} className="text-xl font-bold my-4">{serialize(node.children)}</h1>;
                case "h5":
                    return <h1 key={i} className="text-lg font-bold my-4">{serialize(node.children)}</h1>;
                case "h6":
                    return <h6 key={i}>{serialize(node.children)}</h6>;
                case "blockquote":
                    return <blockquote key={i}>{serialize(node.children)}</blockquote>;
                case "ul":
                    return <ul key={i} className="list-disc list-inside my-2 pl-4">{serialize(node.children)}</ul>;
                case "ol":
                    return <ol key={i} className="list-decimal list-inside my-2 pl-4">{serialize(node.children)}</ol>;
                case "li":
                    return <li key={i} className="my-1">{serialize(node.children)}</li>;
                case "link":
                    return (
                        <a href={escapeHTML(node.url)} key={i}>
                            {serialize(node.children)}
                        </a>
                    );
                case "upload":
                    return <div className="w-full p-2"><img src={API_URL + (node.value?.url || "")} width={500} height={150} alt={node.value?.filename || ""} /></div>

                default:
                    return <p className="ml-4" key={i}>{serialize(node.children)}</p>;
            }
        });

    return <div className="prose prose-lg mx-auto text-white">{serialize(content)}</div>;
};

export default RichTextRenderer;
