import React from 'react';
import {create} from 'react-test-renderer';
import {
  ActivityIndicator,
  AlbumCard,
  Backdrop,
  Header,
  Heading,
  ImageThumbnail,
  ListItem,
  SubHeading,
  SwipeButton,
} from '../src/components';

const ActivityIndicatorTree = create(<ActivityIndicator />),
  AlbumCardTree = create(<AlbumCard />),
  BackdropTree = create(<Backdrop />),
  HeaderTree = create(<Header />),
  HeadingTree = create(<Heading />),
  ImageThumbnailTree = create(<ImageThumbnail />),
  ListItemTree = create(<ListItem />),
  SubHeadingTree = create(<SubHeading />),
  SwipeButtonTree = create(<SwipeButton />);

test('ActivityIndicator Snapshot', () => {
  expect(ActivityIndicatorTree).toMatchSnapshot();
});

test('AlbumCard Snapshot', () => {
  expect(AlbumCardTree).toMatchSnapshot();
});

test('Backdrop Snapshot', () => {
  expect(BackdropTree).toMatchSnapshot();
});

test('Backdrop Snapshot', () => {
  expect(HeaderTree).toMatchSnapshot();
});

test('Heading Snapshot', () => {
  expect(HeadingTree).toMatchSnapshot();
});

test('ImageThumbnail Snapshot', () => {
  expect(ImageThumbnailTree).toMatchSnapshot();
});

test('ListItem Snapshot', () => {
  expect(ListItemTree).toMatchSnapshot();
});

test('SubHeading Snapshot', () => {
  expect(SubHeadingTree).toMatchSnapshot();
});

test('SwipeButton Snapshot', () => {
  expect(SwipeButtonTree).toMatchSnapshot();
});
