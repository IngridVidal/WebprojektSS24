import { BlockList } from "net";

export const Media = {
    slug: "media",
    labels: {
        singular: "Media",
        plural: "Media",
    },

    access: {
        read: () => true,
    },
    upload: true,

    fields: [
        {
            name: "alt",
            label: "Alt",
            type: "text",
            required: true,
        },
    ],
};
