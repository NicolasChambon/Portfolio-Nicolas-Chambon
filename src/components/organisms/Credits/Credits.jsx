import './Credits.scss';

const Credits = () => {
  return (
    <p className="Credits">
      Picture by{' '}
      <a
        className="Credits-link"
        href="https://unsplash.com/fr/@fiveamstories?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        target="_blank"
      >
        Alex Shutin
      </a>{' '}
      on{' '}
      <a
        className="Credits-link"
        href="https://unsplash.com/fr/photos/photographie-panoramique-de-montagnes-kKvQJ6rK6S4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        target="_blank"
      >
        Unsplash
      </a>
    </p>
  );
};

export default Credits;
