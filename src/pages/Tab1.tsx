import { IonContent, IonAvatar, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Apresentação</IonTitle>
        </IonToolbar>
        <IonAvatar>
          <img alt="Silhouette of a person's head" src="https://cdn.shopify.com/s/files/1/0293/3024/3663/files/cachorro-de-raca1.jpg?v=1758894214" />
        </IonAvatar>
      </IonHeader>
      <IonContent fullscreen>
<IonHeader className="Cabecalho" collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Apresentação" /> */}
            <IonCard>
      <IonCardHeader>
<IonCardTitle className="Titulo">Titulo do cartão</IonCardTitle>

        <IonCardSubtitle>Subtitulo do cartão</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Pequena descrição do cartão</IonCardContent>
    </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
