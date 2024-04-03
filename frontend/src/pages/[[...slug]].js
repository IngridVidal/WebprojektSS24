// Dynamic Route! not like a fix route - its dynamic!


//dynamic route!!!
import React from 'react'
import RenderBlocks from '@/utils/RenderBlocks'
import axios from 'axios';


//for every page that is rendered - the page prop is passed to the page component
export default function Page({page}) {
    return (
        <div>
            <RenderBlocks layout = {page.layout}/>

        </div>
    )
}

//uses axios to check api -> map through all pages and will return the slug. Home page does not have a slug. -> so basically just generates a list of slugs
export const getStaticPaths = async () => {
    const pageReq = await axios('/api/pages?limit=100');
    const pageData = pageReq.data;

    const returnObj = {
        paths: pageData.docs.map(({ slug, id }) => {
            return {
                params: { slug: slug !== 'index' ? slug.split('/') : false },
                //if slug is not index -> split the slug by / -> so that the slug is an array
            };
        }),
        fallback: false,
    };
//fallback: false -> if the page does not exist - it will return a 404 page
    return returnObj;
};

//fetches the page data from the api -> and returns the page data
export const getStaticProps = async (ctx) => {
    const slug = ctx.params?.slug || 'index';
    const preview = ctx.preview || false;



    //fetch page -> and render it

    const pageReq = await axios(`/api/pages?where[slug][equals]=${slug}`);
    let pageData = pageReq.data.docs[0]

    return {
        props: {
            page: pageData,
        },
    };
};