import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks/use-app';
import { useState } from 'react';
import { BookingInfo } from '../../types/types';
import Spinner from '../../components/spinner/spinner';
import Form from '../../components/form/form';


const Booking = ():JSX.Element => {
  const bookingInfo = useAppSelector((state) => state.bookingInfo);
  const isBookingInfoLoading = useAppSelector((state) => state.isBookingInfoLoading);
  const [activeAddressId, setActiveAddressId] = useState<BookingInfo['id']>(bookingInfo[0]?.id);
  const currentOffer = useAppSelector((state) => state.offer);

  if (isBookingInfoLoading) {
    return <Spinner />;
  }

  if (!activeAddressId) {
    return <p className="title title--size-s page-content__title" style={{textAlign: 'center'}}>Ошибка загрузки данных.</p>;
  }

  const handleClick = (id: BookingInfo['id']) => {
    setActiveAddressId(id);
  };

  const activeBookingInfo = bookingInfo.find((item) => item.id === activeAddressId);
  const activeAddressName = activeBookingInfo?.location.address;
  const activeSlotsToday = activeBookingInfo?.slots.today;
  const activeSlotsTomorrow = activeBookingInfo?.slots.tomorrow;

  return (
    <main className="page-content decorated-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source type="image/webp" srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x" /><img src="img/content/maniac/maniac-bg-size-m.jpg" srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" width="1366" height="1959" alt="" />
        </picture>
      </div>
      <div className="container container--size-s">
        <div className="page-content__title-wrapper">
          <h1 className="subtitle subtitle--size-l page-content__subtitle">Бронирование квеста
          </h1>
          <p className="title title--size-m title--uppercase page-content__title">{currentOffer?.title}</p>
        </div>
        <div className="page-content__item">
          <div className="booking-map">
            <div className="map">
              <Map locations={bookingInfo.map((item) => ({
                id: item.id,
                ...item.location
              }))} activeOffer={activeAddressId} onMarkerClick={handleClick}
              />
            </div>
            <p className="booking-map__address">{`Вы выбрали: ${activeAddressName || ''}`}</p>
          </div>
        </div>
        <Form today={activeSlotsToday} tomorrow={activeSlotsTomorrow} placeId={activeAddressId} peopleMinMax={currentOffer?.peopleMinMax} offerId={currentOffer?.id}/>
      </div>
    </main>
  );
};
export default Booking;
