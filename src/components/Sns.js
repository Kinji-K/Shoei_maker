import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon
} from 'react-share'

const Sns = () => {
  const path = window.location.origin + window.location.pathname;

  return(
    <dev className="share_icon">
      <FacebookShareButton url={path}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={[path]} title={["書影メーカーを利用しています"]}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </dev>
  );
}

export default Sns;