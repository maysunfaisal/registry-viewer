import Meta from '@components/Meta'

import Link from 'next/link'
import { Page, PageHeader, PageHeaderTools, PageSection, PageSectionVariants } from '@patternfly/react-core'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const logoProps = {
    href: '',
    onClick: () => console.log('clicked logo'),
    target: '_blank'
  }

  const Header = (
    <PageHeader
      logo="Logo"
      logoProps={logoProps}
      headerTools={
        <PageHeaderTools>
          <Link href='/'>
            <a>Devfile Registry</a>
          </Link>
        </PageHeaderTools>
      }
    />
  )

  return (
    <Page header={Header}>
      <Meta />
      <PageSection variant={PageSectionVariants.light}>
        <main>
          {children}
        </main>
      </PageSection>
    </Page>
  )
}

export default Layout
