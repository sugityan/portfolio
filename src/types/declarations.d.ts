declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.jpeg" {
  const content: string;
  export default content;
}

declare module "*.gif" {
  const content: string;
  export default content;
}

declare module "*.css" {
  const content: string;
  export default content;
}

declare module "typewriter-effect" {
  import * as React from "react";

  interface TypewriterProps {
    options: {
      strings?: string[];
      autoStart?: boolean;
      loop?: boolean;
      deleteSpeed?: number;
    };
  }

  const Typewriter: React.FC<TypewriterProps>;
  export default Typewriter;
}

declare module "react-parallax-tilt" {
  import * as React from "react";

  interface ParallaxTiltProps {
    children?: React.ReactNode;
    className?: string;
  }

  const Tilt: React.FC<ParallaxTiltProps>;
  export default Tilt;
}

declare module "react-tsparticles" {
  import * as React from "react";

  interface ParticlesProps {
    id?: string;
    params?: object;
  }

  const Particles: React.FC<ParticlesProps>;
  export default Particles;
}

declare module "*.pdf" {
  const content: string;
  export default content;
}

declare module "react-pdf" {
  import * as React from "react";

  interface DocumentProps {
    file: string | { url: string };
    className?: string;
    loading?: React.ReactNode;
    error?: React.ReactNode;
    onLoadSuccess?: (pdf: object) => void;
    children?: React.ReactNode;
  }

  interface PageProps {
    pageNumber: number;
    scale?: number;
    className?: string;
  }

  export const Document: React.FC<DocumentProps>;
  export const Page: React.FC<PageProps>;
  export const pdfjs: {
    GlobalWorkerOptions: {
      workerSrc: string;
    };
    version: string;
  };
}

declare module "react-github-calendar" {
  import * as React from "react";

  interface GithubCalendarProps {
    username: string;
    year?: string | number;
    blockSize?: number;
    blockMargin?: number;
    color?: string;
    fontSize?: number;
    [key: string]: unknown;
  }

  export const GitHubCalendar: React.FC<githubCalendarProps>;
}