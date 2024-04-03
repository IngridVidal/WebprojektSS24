import {blocks} from "@/blocks/blockList";
import React from "react";
// JS um Blöcke zu rendern - maps through the layout array and renders each block
const RenderBlocks = ({ layout }) => (
    <div>

        { layout.map ((block, i) => {

            const Block = blocks[block.blockType];
            if (Block) {
                return <Block key = {i} {...block} />;
            }
            return null;

        })}
    </div>

);

export default RenderBlocks;