import styled from "styled-components";

interface Props {
  nome: string;
  trevo: string;
}

export default function NomeLoteria({ trevo, nome }: Props) {
  return (
    <Sld>
      <TrevoSld src={trevo} alt="" />
      <NomeSld>{nome}</NomeSld>
    </Sld>
  );
}

const Sld = styled.div`
  display: flex;
`;

const TrevoSld = styled.img``;

const NomeSld = styled.span`
  font-size: 25px;
  font-weight: bold;
  color: ${(props) => props.theme.loteria};
  margin-left: 10px;
`;
