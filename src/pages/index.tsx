import dynamic from 'next/dynamic';

const SlDropdown = dynamic(() => import('@shoelaceDist/react/dropdown'), {
  ssr: false,
});
const SlButton = dynamic(() => import('@shoelaceDist/react/button'), {
  ssr: false,
});
const SlMenu = dynamic(() => import('@shoelaceDist/react/menu'), {
  ssr: false,
});
const SlMenuItem = dynamic(() => import('@shoelaceDist/react/menu-item'), {
  ssr: false,
});
const SlDivider = dynamic(() => import('@shoelaceDist/react/divider'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <p>
        The SlDropdown component will always throw this error when included in a
        Nextjs project.
      </p>
      <p>
        Given the Nextjs development environment will produce a popup for any
        uncaught errors, it produces a frustrating development experience.
      </p>
      <SlDropdown>
        <SlButton slot="trigger" caret>
          Dropdown
        </SlButton>
        <SlMenu>
          <SlMenuItem>Dropdown Item 1</SlMenuItem>
          <SlMenuItem>Dropdown Item 2</SlMenuItem>
          <SlMenuItem>Dropdown Item 3</SlMenuItem>
          <SlDivider></SlDivider>
          <SlMenuItem type="checkbox" checked>
            Checkbox
          </SlMenuItem>
          <SlMenuItem disabled>Disabled</SlMenuItem>
          <SlDivider></SlDivider>
          <SlMenuItem>Prefix</SlMenuItem>
        </SlMenu>
      </SlDropdown>
    </>
  );
}
