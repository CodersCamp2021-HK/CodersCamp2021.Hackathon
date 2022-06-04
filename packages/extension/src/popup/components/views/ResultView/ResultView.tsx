interface ResultViewProps {
  result: boolean;
}

const ResultView = ({ result }: ResultViewProps) => {
  return <div>{result.toString()}</div>;
};

export { ResultView };
