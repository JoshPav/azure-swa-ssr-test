import styles from "../styles/Image.module.css";
import Image from "next/image";
import Link from "next/link";
import ViewSource from "../components/view-source";
import azureLogo from "../public/Azure-A-256px-marketing.svg";

const Code = (p) => <code className={styles.inlineCode} {...p} />;

const Index = () => (
  <div className={styles.container}>
    <ViewSource pathname="pages/image.js" />
    <div className={styles.card}>
      <h1>Image Component with Next.js</h1>
      <p>
        This page demonstrates the usage of the{" "}
        <a href="https://nextjs.org/docs/api-reference/next/image">
          next/image
        </a>{" "}
        component with live examples.
      </p>
      <p>
        This component is designed to{" "}
        <a href="https://nextjs.org/docs/basic-features/image-optimization">
          automatically optimize
        </a>{" "}
        images on-demand as the browser requests them.
      </p>
      <hr className={styles.hr} />
      <h2 id="layout">Layout</h2>
      <p>
        The <Code>layout</Code> property tells the image to respond differently
        depending on the device size or the container size.
      </p>
      <p>
        Select a layout below and try resizing the window or rotating your
        device to see how the image reacts.
      </p>
      <ul>
        <li>
          <Link href="/layout-intrinsic">
            layout=&quot;intrinsic&quot;
          </Link>
        </li>
        <li>
          <Link href="/layout-responsive">
            layout=&quot;responsive&quot;
          </Link>
        </li>
        <li>
          <Link href="/layout-fixed">
            layout=&quot;fixed&quot;
          </Link>
        </li>
        <li>
          <Link href="/layout-fill">
            layout=&quot;fill&quot;
          </Link>
        </li>
        <li>
          <Link href="/background">
            background demo
          </Link>
        </li>
      </ul>
      <hr className={styles.hr} />
      <h2 id="placeholder">Placeholder</h2>
      <p>
        The <Code>placeholder</Code> property tells the image what to do while
        loading.
      </p>
      <p>
        You can optionally enable a blur-up placeholder while the high
        resolution image loads.
      </p>
      <p>
        Try it out below (you may need to disable cache in dev tools to see the
        effect if you already visited):
      </p>
      <ul>
        <li>
          <Link href="/placeholder">
            placeholder=&quot;blur&quot;
          </Link>
        </li>
        <li>
          <Link href="/shimmer">
              placeholder=&quot;blur&quot; with animated shimmer blurDataURL
          </Link>
        </li>
        <li>
          <Link href="/color">
            placeholder=&quot;blur&quot; with solid color blurDataURL
          </Link>
        </li>
      </ul>
      <hr className={styles.hr} />
      <h2 id="internal">Internal Image</h2>
      <p>
        The following is an example of a reference to an internal image from the{" "}
        <Code>public</Code> directory.
      </p>
      <p>
        This image is intentionally large so you have to scroll down to the next
        image.
      </p>
      <Image alt="Azure logo" src={azureLogo} width={1000} height={1000} />
      <hr className={styles.hr} />
      <h2 id="external">External Image</h2>
      <p>
        The following is an example of a reference to an external image at{" "}
        <Code>docs.microsoft.com</Code>.
      </p>
      <p>
        External domains must be configured in <Code>next.config.js</Code> using
        the <Code>domains</Code> property.
      </p>
      <Image
        alt="Static Web Apps overview"
        src="https://docs.microsoft.com/en-us/azure/static-web-apps/media/overview/azure-static-web-apps-overview.png"
        width={1200}
        height={500}
      />
      <hr className={styles.hr} />
      <h2 id="more">Learn More</h2>
      <p>
        You can optionally configure a cloud provider, device sizes, and more!
      </p>
      <p>
        Checkout the{" "}
        <a href="https://nextjs.org/docs/basic-features/image-optimization">
          Image Optimization documentation
        </a>{" "}
        to learn more.
      </p>
    </div>
  </div>
);

export default Index;
