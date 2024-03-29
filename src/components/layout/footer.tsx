import OtherControls from './footer/other-controls';
import PlayerController from './footer/player-controller';
import TrackDisplayer from './footer/track-displayer';

export default function Footer(): JSX.Element {
  return (
    <div className="flex flex-row items-center justify-between p-2">
      <TrackDisplayer />
      <PlayerController />
      <OtherControls />
    </div>
  );
}
