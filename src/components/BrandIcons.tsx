import {
    siWordpress,
    siWoocommerce,
    siWebflow,
    siNextdotjs,
    siReact,
    siGreensock,
    siNetlify,
    siPrismic,
    siVercel,
    siTypescript,
    siTailwindcss,
    siFramer,
    siFigma,
    siMiro,
    SimpleIcon
} from "simple-icons/icons";

function Icon({ icon, className, ...props }: { icon: SimpleIcon; className?: string;[key: string]: any }) {
    return (
        <svg
            role="img"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path d={icon.path} />
        </svg>
    );
}

export const BrandIcons = {
    WordPress: (props: any) => <Icon icon={siWordpress} {...props} />,
    WooCommerce: (props: any) => <Icon icon={siWoocommerce} {...props} />,
    Webflow: (props: any) => <Icon icon={siWebflow} {...props} />,
    NextJS: (props: any) => <Icon icon={siNextdotjs} {...props} />,
    React: (props: any) => <Icon icon={siReact} {...props} />,
    GSAP: (props: any) => <Icon icon={siGreensock} {...props} />,
    Netlify: (props: any) => <Icon icon={siNetlify} {...props} />,
    Prismic: (props: any) => <Icon icon={siPrismic} {...props} />,
    Vercel: (props: any) => <Icon icon={siVercel} {...props} />,
    TypeScript: (props: any) => <Icon icon={siTypescript} {...props} />,
    Tailwind: (props: any) => <Icon icon={siTailwindcss} {...props} />,
    FramerMotion: (props: any) => <Icon icon={siFramer} {...props} />,
    Figma: (props: any) => <Icon icon={siFigma} {...props} />,
    Miro: (props: any) => <Icon icon={siMiro} {...props} />,
};
