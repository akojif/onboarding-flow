interface CardBodyProps {
  children: React.ReactNode;
}

const CardBody = ({ children }: CardBodyProps) => {
  return <div className="card-body">{children}</div>;
};

export default CardBody;
