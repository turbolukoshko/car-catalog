"use client";

import { useEffect, useRef, useState } from "react";

import {
  CarCard,
  Filter,
  HeroBanner,
  Loading,
  SearchBar,
  ShowMore,
} from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { CarProps } from "@/types";
import { fetchCars } from "@/utils/fetchCars";

export default function Home() {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  //search states
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  // filter states
  const [fuel, setFuel] = useState<string>("");
  const [year, setYear] = useState<number>(2023);
  // pagination states
  const [limit, setLimit] = useState<number>(10);
  const [firstLoading, setFirstLoading] = useState<boolean>(true);

  const getCars = async () => {
    setLoading(true);

    try {
      const result = await fetchCars({
        manufacturer: manufacturer,
        year: year,
        fuel: fuel,
        limit: limit,
        model: model,
      });

      setCars(result);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setFirstLoading(false);
  }, []);

  useEffect(() => {
    getCars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fuel, year, limit, manufacturer, model]);
  const anchorRef = useRef<HTMLDivElement | null>(null);

  return (
    <main className="overflow-hidden">
      <HeroBanner anchorRef={anchorRef} />

      <div
        className={`mt-12 padding-x max-width ${
          !cars.length ? "pt-4 pb-24" : "padding-y"
        }`}
        ref={anchorRef}
      >
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalog</h1>
          <p>Expolore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar setManufactured={setManufacturer} setModel={setModel} />
          <div className="home__filter-container">
            <Filter title="fuel" options={fuels} setFilter={setFuel} />
            <Filter
              title="year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>

        {loading && <Loading />}

        {cars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {cars?.map((car, idx) => (
                <CarCard car={car} key={idx} />
              ))}
            </div>

            {loading && <Loading />}

            <ShowMore
              page={limit / 10}
              isNext={limit > cars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          !loading &&
          !firstLoading && (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Oops, no cars.</h2>
            </div>
          )
        )}
      </div>
    </main>
  );
}
