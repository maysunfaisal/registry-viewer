import type { Devfile } from 'custom-types';
import type { ForwardedRef } from 'react';
import devfileLogo from '@public/images/devfileLogo.svg';
import { capitalizeFirstLetter } from '@src/util/client';

import {
  Text,
  TextContent,
  TextVariants,
  Brand,
  Label,
  LabelGroup,
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  CardHeader,
  CardHeaderMain
} from '@patternfly/react-core';

export interface DevfileGalleryProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  devfile: Devfile;
}

/**
 * Renders a {@link DevfileGalleryItem} React component.
 * Adds a devfile tile inside of a DevfileGrid
 * @returns `<DevfileTile devfile={devfile}/>`
 */
export const DevfileGalleryItem: React.ForwardRefRenderFunction<HTMLElement, DevfileGalleryProps> =
  (
    { devfile, onClick }: DevfileGalleryProps,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: ForwardedRef<HTMLElement>
  ) => {
    const maxTags = 3;

    const onTileClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
      onClick!(event);
    };

    return (
      <Card
        style={{ height: 'auto', margin: '0.5rem', cursor: 'pointer' }}
        onClick={onTileClick}
        isHoverable
        data-test-id={`card-${devfile.name.replace(/\.| /g, '')}`}
      >
        <CardHeader>
          <CardHeaderMain>
            <TextContent>
              <Text style={{ marginBottom: '1rem' }} component={TextVariants.p}>{`${
                devfile.sourceRepo
              } - ${capitalizeFirstLetter(devfile.type)}`}</Text>
            </TextContent>
            <Brand src={devfile.icon || devfileLogo} alt="" style={{ height: '2.5rem' }} />
          </CardHeaderMain>
        </CardHeader>
        <CardTitle>
          <TextContent>
            <Text component={TextVariants.h3}>{devfile.displayName}</Text>
          </TextContent>
        </CardTitle>
        <CardBody style={{ height: '5rem', overflow: 'hidden' }}>
          <TextContent>
            <Text component={TextVariants.p}>{devfile.description}</Text>
          </TextContent>
        </CardBody>
        <CardFooter>
          <LabelGroup>
            {devfile.tags?.slice(0, maxTags).map((tag) => (
              <Label style={{ margin: '0.125rem' }} key={tag} color="blue">
                {tag}
              </Label>
            ))}
          </LabelGroup>
        </CardFooter>
      </Card>
    );
  };
DevfileGalleryItem.displayName = 'DevfileGalleryItem';
