import { IconLayer } from "@deck.gl/layers";

const ICON_MAPPING = {
  marker: { x: 0, y: 0, width: 128, height: 128, mask: true },
};

const useMarker = (
  id: string,
  data: any,
  color: [number, number, number],
  showFireIcons: boolean
) => {
  return new IconLayer({
    id,
    data,
    pickable: true,
    iconAtlas:
      "https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png",
    iconMapping: ICON_MAPPING,
    getIcon: () => "marker",
    sizeScale: 15,
    getPosition: (d: any) => [d.coordinate.longitude, d.coordinate.latitude],
    getSize: showFireIcons ? 3 : 0,
    getColor: () => color,
  });
};

export default useMarker;
