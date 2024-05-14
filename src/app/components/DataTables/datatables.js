import React from "react";
import "./datatables.css";

export default function DataTables() {
  return (
    <div className="container-fluid  my-5 py-5">
      <div className="container py-5">
        <div className="row g-5">
            <section className="table-container" tabindex="0" aria-labelledby="market-mover-caption" role="region">
         
          <table
            cellpadding="0"
            cellspacing="0"
            width="100%"
            className=""
            
          >
            <caption id="market-mover-caption">
                <h2>MARKET MOVERS</h2>
            </caption>
            <thead>
              <tr>
                <th className="th-style px-4 py-3">
                  Name
                 
                </th>
                <th className="th-style py-3">
                  LTP
                 
                </th>
                <th className="th-style py-3">
                  Change
                  
                </th>
                <th className="th-style py-3">
                  Chg%
                  
                </th>
                <th className="th-style py-3">
                  Volume
                  
                </th>
                <th className="th-style py-3">
                  Value (Lakhs)
                 
                </th>
                <th className="th-style py-3">
                  OI
                  
                </th>
                <th className="th-style py-3">
                  OI Chg%
                 
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className="px-4 py-3">
                    <span className="fs-5 text-bold fw-bold">GOLD</span>
                    <span className=""> (MCX)</span>
                    <span className="">05 June 2024</span>
               </td>
                <td>71,844.00</td>
                <td className="text-danger">-11.00</td>
                <td className="text-danger">-0.02</td>
                <td>7,305.00</td>
                <td>526,483.71</td>
                <td className="">12,674.00</td>
                <td className="text-danger">-11.56</td>
              </tr>
              <tr className="">
                <td className="px-4 py-3">
                    <h4 className="fs-5 text-bold fw-bold">SILVER</h4>
                    <span className=""> (MCX)</span>
                    <span className="">05 July 2024</span>
                </td>
                <td>84,874.00</td>
                <td className="text-danger">-12.00</td>
                <td className="text-danger">-0.01</td>
                <td>252,750.00</td>
                <td>214,281.28</td>
                <td className="">27,537.00</td>
                <td className="text-danger">-0.29</td>
              </tr>
              <tr className="">
                <td className="px-4 py-3">
                    <h4 className="fs-5 text-bold fw-bold">SILVERM</h4>
                    <span className=""> (MCX)</span>
                    <span className="">28 June 2024</span>
                </td>
                <td>84,790.00</td>
                <td className="">23.00</td>
                <td className="">0.03</td>
                <td>120,200.00</td>
                <td>101,809.18</td>
                <td className="">36,656.00</td>
                <td className="">0.61</td>
              </tr>
              <tr className="">
                <td className="px-4 py-3">
                   <h4 className="fs-5 text-bold fw-bold">GOLDM</h4>
                    <span className=""> (MCX)</span>
                    <span className="">05 June 2024</span>
                </td>
                <td>71,815.00</td>
                <td className="text-danger">-4.00</td>
                <td className="text-danger">-0.01</td>
                <td>1,692,000.00</td>
                <td>121,854.83</td>
                <td className="">14,183.00</td>
                <td className="text-danger">-4.91</td>
              </tr>
            </tbody>
          </table>
          </section>
          </div>
          <div className="row g-5 mt-5">
          <section className="table-container" tabindex="0" aria-labelledby="gold-etf-caption" role="region">
          <table
            cellpadding="0"
            cellspacing="0"
            width="100%"
            className=""
          >
            <caption id="gold-etf-caption">
                <h2>GOLD ETFs</h2>
            </caption>
            <thead>
              <tr>
                <th className="th-style px-4 py-3">Name</th>
                <th className="th-style py-3">Price</th>
                <th className="th-style py-3">Chg%</th>
                <th className="th-style py-3">
                  Asset Size<p>(Rs. cr.)</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className="px-4 py-3">
                  <h4 className="">
                    Nippon India ETF Gold BeES
                  </h4>
                </td>
                <td>60.75</td>
                <td className="">0.53</td>
                <td className="fw-semibold">9,781.14</td>
              </tr>
              <tr className="">
                <td className="">
                  <h4 className="px-4 py-3">
                    ICICI Prudential Gold ETF
                  </h4>
                </td>
                <td>62.49</td>
                <td className="">0.53</td>
                <td className="fw-semibold">5,169.71</td>
              </tr>
              <tr className="">
                <td className="px-4 py-3">
                  <h4 className="">
                    HDFC Gold Exchange Traded Fund
                  </h4>
                </td>
                <td>61.86</td>
                <td className="">0.44</td>
                <td className="fw-semibold">4,507.84</td>
              </tr>
              <tr className="">
                <td className="px-4 py-3">
                  <h4 className="">SBI Gold ETF</h4>
                </td>
                <td>62.50</td>
                <td className="">0.53</td>
                <td className="fw-semibold">4,228.54</td>
              </tr>
              <tr className="">
                <td className="px-4 py-3">
                  <h4 className="">
                    UTI Gold Exchange Traded Fund
                  </h4>
                </td>
                <td>60.91</td>
                <td className="">0.45</td>
                <td className="fw-semibold">1,052.76</td>
              </tr>
              <tr className="">
                <td className="px-4 py-3">
                  <h4 className="">
                    Axis Gold ETF Fund
                  </h4>
                </td>
                <td>60.61</td>
                <td className="">0.44</td>
                <td className="fw-semibold">864.51</td>
              </tr>
              <tr className="">
                <td className="px-4 py-3">
                  <h4 className="">
                    Aditya Birla Sun Life Gold ETF
                  </h4>
                </td>
                <td>64.19</td>
                <td className="">0.53</td>
                <td className="fw-semibold">727.29</td>
              </tr>
              <tr className="">
                <td className="px-4 py-3">
                  <h4 className="">DSP Gold ETF</h4>
                </td>
                <td>71.10</td>
                <td className="">0.53</td>
                <td className="fw-semibold">313.40</td>
              </tr>
              <tr className="">
                <td className="px-4 py-3">
                  <h4 className="">
                    Mirae Asset Gold ETF
                  </h4>
                </td>
                <td>71.12</td>
                <td className="">0.52</td>
                <td className="fw-semibold">198.58</td>
              </tr>
              <tr className="">
                <td className="px-4 py-3">
                  <h4 className="">
                    Quantum Gold Fund
                  </h4>
                </td>
                <td>60.67</td>
                <td className="">0.77</td>
                <td className="fw-semibold">187.30</td>
              </tr>
            </tbody>
          </table>
          </section>
        </div>
      </div>
    </div>
  );
}
