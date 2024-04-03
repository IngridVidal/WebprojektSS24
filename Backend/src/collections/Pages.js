import { BlockList } from "net";
import { TwoColumn } from "../Blocks/TwoColumn";
import { Hero } from "../blocks/Hero";

export const Pages = {
    slug: "pages",
    labels: {
        singular: "Page",
        plural: "Pages",
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "name",
            label: "Name",
            type: "text",
            required: true,
        },
        {
            name: "slug",
            label: "Slug",
            type: "text",
            required: true,
        },

        {
            name: "layout",
            label: "Layout",
            type: "blocks",
            blocks: [Hero, TwoColumn],
        },
    ],
};
