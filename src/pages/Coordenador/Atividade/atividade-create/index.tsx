import { useParams } from 'react-router-dom';
import Menu from '../../../../components/Menu';
import MenuCoord from '../../../../components/MenuCoord';

const AtividadeCreate = () => {
  let { id } = useParams();
  return (
    <>
      <Menu area={`/Categoria/${id}`} id_projeto={id}></Menu>
      <MenuCoord />
      <div
        style={{
          margin: 16,
          borderRadius: 5,
          flexDirection: 'column',
          display: 'flex',
          gap: '1em',
          marginBottom: '10em',
        }}
      >
        <div
          style={{
            alignSelf: 'stretch',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 16,
            display: 'flex',
          }}
        >
          <div
            style={{
              width: 283,
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: 16,
              display: 'inline-flex',
            }}
          >
            <div
              style={{
                alignSelf: 'stretch',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: 16,
                display: 'inline-flex',
              }}
            >
              <div
                style={{
                  textAlign: 'right',
                  color: 'white',
                  fontSize: 24,
                  fontFamily: 'Rubik',
                  fontWeight: '700',
                  wordWrap: 'break-word',
                }}
              >
                Adicionar Atividade
              </div>
            </div>
          </div>
          <div
            style={{
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 5,
              paddingBottom: 5,
              background: '#090E09',
              borderRadius: 3,
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: 10,
              display: 'inline-flex',
            }}
          >
            <div
              style={{ color: 'white', fontSize: 12, fontFamily: 'Rubik', fontWeight: '700', wordWrap: 'break-word' }}
            >
              X
            </div>
          </div>
        </div>
        <div
          style={{
            alignSelf: 'stretch',
            height: 71,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: 8,
            display: 'flex',
          }}
        >
          <h2 style={{ color: 'white', fontSize: 16, fontFamily: 'Rubik', fontWeight: '500', wordWrap: 'break-word' }}>
            Data
          </h2>
          <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex' }}>
            <div
              style={{
                width: 119,
                padding: 10,
                background: '#393E4B',
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
                display: 'flex',
              }}
            >
              <div
                style={{
                  color: 'rgba(255, 255, 255, 0.70)',
                  fontSize: 12,
                  fontFamily: 'Rubik',
                  fontWeight: '500',
                  wordWrap: 'break-word',
                }}
              >
                Seg. 21/06/2023
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            alignSelf: 'stretch',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 8,
            display: 'inline-flex',
          }}
        >
          <div style={{ color: 'white', fontSize: 16, fontFamily: 'Rubik', fontWeight: '500', wordWrap: 'break-word' }}>
            Tarefas
          </div>
          <img src="/plus.svg" />
        </div>
        <div style={{ width: 344, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
          <div
            style={{
              width: 128.56,
              paddingRight: 8,
              background: '#393E4B',
              borderRadius: 5,
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: 3,
              display: 'flex',
            }}
          >
            <div
              style={{
                padding: 6,
                borderRadius: 2,
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                gap: 10,
                display: 'flex',
              }}
            >
              <div
                style={{
                  flex: '1 1 0',
                  alignSelf: 'stretch',
                  padding: 3,
                  background: '#9747FF',
                  borderRadius: 4,
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 10,
                  display: 'flex',
                }}
              >
                <div style={{ width: 16, height: 16, position: 'relative' }}>
                  <div
                    style={{ width: 16, height: 16, left: 0, top: 0, position: 'absolute', background: 'white' }}
                  ></div>
                </div>
              </div>
            </div>
            <div
              style={{
                width: 75,
                height: 11,
                color: 'white',
                fontSize: 12,
                fontFamily: 'Rubik',
                fontWeight: '500',
                wordWrap: 'break-word',
              }}
            >
              Upload
            </div>
          </div>
          <div
            style={{
              width: 128.56,
              paddingRight: 8,
              background: '#393E4B',
              borderRadius: 5,
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: 3,
              display: 'flex',
            }}
          >
            <div
              style={{
                padding: 6,
                borderRadius: 2,
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                gap: 10,
                display: 'flex',
              }}
            >
              <div
                style={{
                  flex: '1 1 0',
                  alignSelf: 'stretch',
                  padding: 3,
                  background: '#2D94F3',
                  borderRadius: 4,
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 10,
                  display: 'flex',
                }}
              >
                <div style={{ width: 16, height: 16, position: 'relative' }}>
                  <div
                    style={{
                      width: 13.33,
                      height: 14.67,
                      left: 1.33,
                      top: 0.67,
                      position: 'absolute',
                      background: 'white',
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <h2
              style={{
                width: 75,
                height: 11,
                color: 'white',
                fontSize: 12,
                fontFamily: 'Rubik',
                fontWeight: '500',
                wordWrap: 'break-word',
              }}
            >
              Digitalização
            </h2>
          </div>
        </div>

        <div
          style={{
            alignSelf: 'stretch',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 8,
            display: 'flex',
          }}
        >
          <div style={{ color: 'white', fontSize: 16, fontFamily: 'Rubik', fontWeight: '500', wordWrap: 'break-word' }}>
            Categorias e Tipologias
          </div>
          <img src="/plus.svg" />
        </div>
        <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex' }}>
          <div
            style={{
              paddingLeft: 4,
              paddingRight: 4,
              paddingTop: 5,
              paddingBottom: 5,
              background: '#393E4B',
              borderRadius: 3,
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: 10,
              display: 'flex',
            }}
          >
            <div
              style={{
                textAlign: 'right',
                color: 'white',
                fontSize: 12,
                fontFamily: 'Rubik',
                fontWeight: '500',
                wordWrap: 'break-word',
              }}
            >
              Jurídico
            </div>
          </div>
          <div
            style={{
              paddingLeft: 4,
              paddingRight: 4,
              paddingTop: 5,
              paddingBottom: 5,
              background: '#393E4B',
              borderRadius: 3,
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: 10,
              display: 'flex',
            }}
          >
            <div
              style={{
                textAlign: 'right',
                color: 'white',
                fontSize: 12,
                fontFamily: 'Rubik',
                fontWeight: '500',
                wordWrap: 'break-word',
              }}
            >
              Administrativo
            </div>
          </div>
        </div>

        <div
          style={{
            alignSelf: 'stretch',
            flexDirection: 'column',
            gap: 16,
            display: 'flex',
          }}
        >
          <div
            style={{
              alignSelf: 'stretch',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 8,
              display: 'inline-flex',
            }}
          >
            <div
              style={{ color: 'white', fontSize: 16, fontFamily: 'Rubik', fontWeight: '500', wordWrap: 'break-word' }}
            >
              Usuários
            </div>
            <img src="/plus.svg" />
          </div>
          <div
            style={{
              width: '100%',
              padding: 16,
              background: '#393E4B',
              borderRadius: 5,
              flexDirection: 'column',
              gap: 16,
              display: 'flex',
            }}
          >
            <div
              style={{
                justifyContent: 'space-between',

                alignItems: 'center',
                gap: 16,
                display: 'flex',
              }}
            >
              <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex' }}>
                <img
                  style={{
                    width: 24,
                    height: 24,
                    background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)',
                    borderRadius: 9999,
                    border: '0.50px #191C24 solid',
                  }}
                  src="https://via.placeholder.com/24x24"
                />
                <div
                  style={{
                    color: 'white',
                    fontSize: 12,
                    fontFamily: 'Rubik',
                    fontWeight: '500',
                    wordWrap: 'break-word',
                  }}
                >
                  Pedro Lucas
                </div>
              </div>
              <div style={{ gap: 16, display: 'flex' }}>
                <button
                  style={{
                    padding: 8,
                    background: '#43DB6D',
                    borderRadius: 5,
                    gap: 10,
                    display: 'flex',
                    border: 'none',
                  }}
                >
                  <div
                    style={{
                      color: '#191C24',
                      fontSize: 12,
                      fontFamily: 'Rubik',
                      fontWeight: '500',
                      wordWrap: 'break-word',
                    }}
                  >
                    Atribuir Lote
                  </div>
                </button>
              </div>
            </div>
            <div style={{ gap: 8, display: 'inline-flex' }}>
              <div
                style={{
                  height: 30,
                  paddingLeft: 9,
                  paddingRight: 9,
                  paddingTop: 8,
                  paddingBottom: 8,
                  background: '#191C24',
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 10,
                  display: 'flex',
                }}
              >
                <div
                  style={{
                    color: 'white',
                    fontSize: 12,
                    fontFamily: 'Rubik',
                    fontWeight: '500',
                    wordWrap: 'break-word',
                  }}
                >
                  Lote 206
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          style={{
            alignSelf: 'stretch',
            height: 44,
            padding: 10,
            background: '#43DB6D',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            display: 'flex',
            border: 'none',
          }}
        >
          <div
            style={{ color: '#191C24', fontSize: 12, fontFamily: 'Rubik', fontWeight: '500', wordWrap: 'break-word' }}
          >
            Adicionar Atividade
          </div>
        </button>
      </div>
    </>
  );
};

export default AtividadeCreate;
