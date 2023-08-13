import ContentLoader, { Circle, Rect } from 'react-content-loader/native';

const Skeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={80}
      viewBox="0 0 400 80"
      backgroundColor="#dddddd"
      foregroundColor="#bbbbbb">
      <Rect x="88" y="20" rx="3" ry="3" width="50%" height="20" />
      <Rect x="88" y="45" rx="3" ry="3" width="65%" height="15" />
      <Circle cx="42" cy="42" r="32" />
    </ContentLoader>
  );
};

export default Skeleton;
