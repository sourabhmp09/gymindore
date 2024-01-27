import React from "react";

const BestOffers = () => {
  return (
    <>
      <div className="container-fluid BestOffers">
        <div className="container">
          <div className="row gx-0 py-4 align-items-center">
            <div className="col-md-7 col-lg-7">
              <h1 className="main_heading pe-md-5 pe-lg-5 me-lg-5">
                The best Programs We Offers For You
              </h1>
            </div>
            <div className="col-md-5 col-lg-5">
              <p>
                Stop searching, start thriving! We've handpicked programs just
                for you. Unlock your potential, from fitness feats to career
                climbs. Let's make magic happen!
              </p>
            </div>
          </div>
          <div className="row gx-0 py-4">
            <div
              className="col-md-6 col-lg-3 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration={1000}
            >
              <div className="bestoffer_col1">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB9klEQVR4nO2ZvU4CQRRGx8QIRkmwgOjDGTsI0NAYC2Ji6VNAjImdFhbiDx1vgCRU2NkZC40WNseM3kmWdRd2F5KZMXs62N3kO3svw/wolZOT4wVAFbgF3oEuUJDvy/L5GZgADWDNZtBt4Ar4AgY6eEhizCw3WgYoAv3QtZYtCR1oGArzaGSAWujaIpmpLRHdDlEEZTopZF5sibRjQmaV6dkSKUngVcmUrYhIwAowmiOjR6Q9ufcw5h49qhWtSfxXmeoK2qyrXGAFMm/KFZaU6SuXyPibmQC7yqFqNDJUphac2rhUhdO0lXGCmLd/krYyVlkQtJlCpuKqxMybZrHMnfMSCZ/5UD5IGGQAiHr2XPkiYYgYzR6ATeWTRGiJ3AIOgHWVFv0QsA/UgS0bEkujyydlNIySDHtOSWiAi5ggFW8kNMBnmkBOSmiA+5hQf4I5K5FhRtp0UsKQcEb6sy4AjuKuOQHZZNyR4Le1ahnarOFEO0XMcY69XPhoZN8oSMerhY9Bb7VEhPRPBujFhPRLBtgArmNC+vWb4T/IADuydV+Qrfxl26xkS+RMDlNWJdO2JfIqAdLKhA8zDXVbIk+BEElk5s0AhuaY2YZIKxRmnsw4Yko/kCPoS73etiKh0YfxIjOVNuuZMzuR6cqhft+J/4ucnByVhG+bySDJmo9uMgAAAABJRU5ErkJggg=="
                  alt=""
                  className="img-fluid pb-3"
                />
                <h4>Strength Training</h4>
                <p>
                  Unlock your potential with a dynamic strength training program
                  for lasting fitness gains.
                </p>
                <button>
                  Learn More <i className="fa-solid fa-arrow-right ps-2" />
                </button>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration={1300}
            >
              <div className="bestoffer_col1">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEv0lEQVR4nO3bechUVRjH8WtaaS6VaQstYLaSZUH2TxmWiS2QFS2CmRaRUVaQUEpZoS1Gf4TQZpEVUbSYShBEIZStVGRRCVmaRKWVZFZaGfqJ877nhdvwzsyde8dx7ktfGBjmnu13zj3nPOc5zyRJi8AovIT1/stGvIVrsFvSE8Cl2Ko+n2N4UmZwKLbIzjcYkpQRXIh1GmdBUjZwPrbJx18YmJQF7IpvFWNsUhZwiuJMSkq2KnfxAebhXryD7bIxJSkLuBz/4LJunh2Lhfi1juCLkrKAYRgXvw/C9ZiBgyrmeXj1r8bc+BbMiG/HMeiVlA30xSepUQuj/mJYkHqMVZUmjlg1/owm5YNxdGfhbjyH98LoJ2UDX2RcoMq9aAUwtIEVudyCsTuWK8aEpCzgMMUZmZQF9MIPBcR+X7ptCbMLCL4jKRsYiNU5xK7FgKSM4AT80oDY33B8UmZwHFZmEPslRiQ9AZ0m5rVYUbE3h+8f4boeaWoGMDiemEZg744f/6dEoD/GYyquyvmZGsvon7S5sXETNmkem2KZ7WeEYI4dx5ykncBoO57RSbuAJ1og+KmkXcCqFghenbQD2LPgQT8roY592kHwWK1jXDsIvrmFgme1g+AXWih4UTsIXtNCwWvb4SCwXWsZujMFn1WlUSFu42TMzyFofsxbzXFwzs4U/FiVRi2Oz8/OIfjcmDdcybRPdIDOi7BwV9Qdt8Y04fqkUWbXybu15WYmJuGPGo0eH9MtyiF4Scx7Ro00mzGtlYLn1WjM7+iH3vgph+ANMW/f6NSrxqM7StxReAhLcWbq99uqNOSe+Px0BeM7cFeV53O7zsjRM/owHghtLSJ0CJ7vZtu5M5UmdEKaD8PoxmdvFBD8ZiyjXywzzdIKK6/SKbgEBzQqdjd8VqUx8yo6ZXGMoAv3unvF30cqTofLNpSJZ/BptOqGZJhaH6NPI4IvqSggrMaPBB9zxvz94paVJyhtTdyLM7ltcVLskMo38YJGBN+eyrgqfZMXXKvRwTYZ50Uj4YiwyFQpK7hjb8CyKoFqf8epcWUIU6xSxoDo2j0tBLvEusemnXwYgx8rt7dMhOibmGll1yuEw6MxUG3v3Rbvkl4O8zwscJXRdDgwhkGEu+PXo4dycEWa/XAx7oudtK5O2ER4k/aPeYen0k9tdA5P7rJbo8VUa4uoRuic9zEz3BnXqXNanKd5bPNwNTsqlnN03EHyuXjjHAk92QyW16gnRNEW4Wcckktkha859Hqz6LCDsUcc0WGpusIcfbtg+R02fG50LhLNYkPXnMazKbt4AQ5OdfCUAs78bYVGWXOd63NrnKA2x4iBvinrLo9Zqrtwx8zgcc2j46Ibr9ZI8xWOrHPWrsfMIoLnaw7h1e0TP/X+DhC2lUGx/ndz1DW9iOCJmsP6WN6+GdPfGNPfkqOuUUWj6bYozsaUxZSFJ7uJu866H2e3obsjHsWaQZcR83WGtPfHtMESa4QrkiZdcK9QnIkNrPxjYtqwZWXlFexSWHAg3OngNcVYlrqLqhWltzCm6x337iw83XUObxo6jYIJ8WQTVtJG/6ITzNOOgwJOxHepZ+HEFCy66V1zMK7o1ay8sOqHf82EY+GpjQj5F1BcyDySmCbRAAAAAElFTkSuQmCC"
                  alt=""
                  className="img-fluid pb-3"
                />
                <h4>Basic Yoga</h4>
                <p>
                  Discover serenity and flexibility through this foundational,
                  beginner-friendly yoga.
                </p>
                <button>
                  Learn More <i className="fa-solid fa-arrow-right ps-2" />
                </button>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration={1700}
            >
              <div className="bestoffer_col1">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACl0lEQVR4nO2ZzYtOURzHj5fREAt5SWYhNrOQwqRGjcQfYEkWZChFlOxlMRRNUzPJpEiNkGIWFkomO8JGaUjNWIypMd6Nt3kM8tFP5063p+u5955z7n3OrftZPt3ze+7nvv2+5xylSkpKjADWABeAEeAj8Bw4DsxXRQCYA3QDv4lmGFinfAZYAjwgngqwR/kIsFg/PmnoAWYoXwAagXuYcUD5AtCBOcPKB4ClwFcLkUnlA8BB7Oh1eEH3AteBQeA18BMYAx4CnUBLrQL9FhLfgCZLgUVAl/4SJuE2sCqq0BBmvAXaLCXWAqOGF3BrdbH3MYPGI36T277FUqJFn5Ap34FN4YK/YgY0637xAXgFnAXmOuhZL7FnBFgQFK3k3SeAM7ijMyg6EXOgdPtZDiWagCmHIhP/gmzCW9zuUOQw7tkthR8nOFDej+WORG5lIHJRCt9JePAA0OBA5EUGIoNS+HKKAVeBmQkC6E7gEvBMT8rQn/lHCb6SJrwzCYz/jSQ6YkiPyZsp+fN2g4GnqgQagCvUj1E5ic2Gg4+GRPqoL/flJJYZDpZkugHYRv3pCK6otHoThgxDn2uaA5FrFJe+8Mt6hGIyJgE0LNJK8fgk85moRbkvFIen0+9FRDO7gf9UgBPAvFrRwqQx5sVn4JgsUNSKR4HIQuAHftIVK1AlcxP/+AOsTiuyHf8YSCWhRWZbdPmsaEstomUO4Q/9RhKhu5Jk+ptHw1thLKJl1jte6TBhh5VESGZ/HSV6nEiEZGSFMW/OOd8Fk4LA+RwlujPbytMypzMWeCM9TOUBsCuDhCxLRSclHuUiEQCs1KslEuKe6KWkVp3TZMNmI7BPPyJ3ddyWyc+kTq7jevu7V8/1G6eLl5SUqCz5C3JRTAsU8lixAAAAAElFTkSuQmCC"
                  alt=""
                  className="img-fluid pb-3"
                />
                <h4>Body Building</h4>
                <p>
                  Transform your physique with a comprehensive bodybuilding
                  regimen strength, size, and definition.
                </p>
                <button>
                  Learn More <i className="fa-solid fa-arrow-right ps-2" />
                </button>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration={2000}
            >
              <div className="bestoffer_col1">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACo0lEQVR4nO2ZTYhOURiAXxllSPlZKWZKNtJIZocURb5iZ2FlVhZqFkpJKX8JC6KUxWQjG0QslDJfmeSn/CzEQj4JYwgjMoPx++j4zpfbde49Z77ce8+Z7lPTNHXO6X2+8/O+7zciJSVjD2ASsAd4DHzVv3cDrRKYxE3M3AhGRu9EGrskBPQxSqMmIaDvRBojMkZ25JGEgH6d0thZVGAbgZfAIHBJXVagAkxLGN+qXycT13N/tYDpwLmUT/YX8BA4AWwCOmIySrim70xN7UQREsuBfkZPb1SoMIAJwH7gJ83zHTis1ipKYi5wKyG4a8A6oAd47Sh0sAiJlcBHQzA/9FlviYwdDywDLlpE3hYh8sQQyFNgacoRvG8RGSxCpD8WxClgasr4rdg5lq+F/AmsomXUT5dlbBswbJFQT267Hj9RfAS44LobwHxgn/iG3jkbI8BsPf6suvT4tCu6YTI9CnGO6vEdkXzUJb4AHHCQ+ALMMhzBu+IDwDyHPkNxZBTlfAP1wFTyEjmNnc/AzMicbtx5npeIurA2DsXmTNalv1ci7yyBqJK+zTBvDTBgkwBW5yVyxuFT7UtqtgoH6IxUxi7H5EEjh3gDsBD4BCzSf88BrjjIvAAWiA9QL9Vv68BeRXZmHLABeGOR+QCsKNpDgM2xwL4Bexs9t+7neyydpMo7a7MKsB2oOiY3DDKdsfUWA/dS5jzLSqRK82xPWLMF2AIMGea8z0pkqEmJq+reWNZeb5jXl5VIbxMSA6ZkZ1h7R1rtlcUduex4R1TeOOmaF4DzhjX8Kd9d0aVGHD/yiSvAjIROsZgv6ZoFWGUQuSOhAWwziByX0MDceHVLaFD/t0GcJRIa1NvcKKoGmyKhwb+Jtiohwt9EO6zrOWslUFJSIv+F304HE3CzjTjQAAAAAElFTkSuQmCC"
                  alt=""
                  className="img-fluid pb-3"
                />
                <h4>Weight Loss</h4>
                <p>
                  Achieve sustainable weight loss through a balanced approach,
                  combining nutrition, and mindfulness.
                </p>
                <button>
                  Learn More <i className="fa-solid fa-arrow-right ps-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestOffers;
