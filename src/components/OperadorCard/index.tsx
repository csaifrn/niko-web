import { useEffect, useRef, useState } from 'react';
import * as S from './styles';
import { AtribuirModal } from '../AtribuirLotesModal';
import { DataFase } from '../DataFase';

const OperadorCard = (user: any) => {
  const [expanded, setExpanded] = useState(false);
  const [modal, setModal] = useState(false);
  const [accodionHeight, setAccodionHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const open = () => setExpanded(!expanded);

  useEffect(() => {
    if (ref.current) {
      const getHeight = ref.current.scrollHeight;
      setAccodionHeight(getHeight);
    }
  }, [expanded]);

  const handleAtribuir = () => {
    setModal(!modal);
  };

  const User: any = user.User;
  return (
    <>
      <S.totalArea>
        <S.CardA>
          {User.fase !== '' && (
            <S.CardArea onClick={open}>
              <S.dataUser>
                <img
                  src={User.url}
                  alt=""
                  width={28}
                  height={28}
                  style={{
                    objectFit: 'cover',
                    borderRadius: '100%',
                    border: '1px solid #43DB6D',
                  }}
                />
                <p style={{ color: '#43DB6D' }}>{User.name}</p>
              </S.dataUser>
              <S.dataLote>
                <img src={`/icon-page/${User.fase}.png`} height={28} width={28} alt="" />
                <div>
                  <S.textLote>{User.lote}</S.textLote>
                </div>
              </S.dataLote>
            </S.CardArea>
          )}
          {User.fase === '' && (
            <S.CardArea onClick={open}>
              <S.dataUser>
                <img
                  src={User.url}
                  alt=""
                  width={28}
                  height={28}
                  style={{ objectFit: 'cover', borderRadius: '100%' }}
                />
                <p>{User.name}</p>
              </S.dataUser>
            </S.CardArea>
          )}
          {User.fase === '' && (
            <div className="padding">
              <S.ButtonAtribuir onClick={handleAtribuir}>
                <S.Icon src="/upIcon.svg" />
                <p>Atribuir lote</p>
              </S.ButtonAtribuir>
            </div>
          )}
        </S.CardA>

        <S.Footer className={expanded ? 'show' : ''} setHeight={accodionHeight} ref={ref}>
          <DataFase
            recepcao={30}
            preparo={2}
            catalogacao={12}
            digitalizacao={23}
            upload={1}
            arquivados={23}
            percentageCallback={() => {
              console.log();
            }}
          />
        </S.Footer>
      </S.totalArea>
      {modal && <AtribuirModal nameUser={User.name} close={handleAtribuir}></AtribuirModal>}
    </>
  );
};

export default OperadorCard;
