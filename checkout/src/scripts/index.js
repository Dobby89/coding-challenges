import '../styles/index.scss';

import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import { IconWarning } from './components/icons';

class App extends Component {
	constructor(props) {
        super(props);
    }

	render() {
        return (
            <Fragment>
				<header className="bg-grey-darkest py-10 text-white">
					<div className="max-w-xl m-auto px-3">
						<h1>Checkout</h1>
					</div>
				</header>

				<div className="max-w-xl m-auto py-10 px-3 text-grey-darkest">

					<div className="flex flex-wrap justify-between -mx-3">
						<form className="w-full md:w-1/2 px-3">
							<div className="md:pr-4">
								<fieldset className="mb-8 pb-6">
									<h2 className="mb-5 text-md">Billing Details</h2>

									<div className="mb-5">
										<label className="block mb-2 font-bold text-sm">First Name</label>
										<div className="relative shadow">
											<IconWarning className="block absolute pin-t pin-r mt-2 mr-2 text-red fill-current" height="30px" width="30px" />
											<input type="text" className="w-full block border border-red-lighter p-3 rounded text-red-light bg-red-lightest pr-12" />
										</div>
									</div>


									<div className="mb-5">
										<label className="block mb-2 font-bold text-sm">Last Name</label>
										<div className="relative shadow">
											<input type="text" className="w-full block border border-grey-light p-3 rounded" />
										</div>
									</div>

									<div className="mb-5">
										<label className="block mb-2 font-bold text-sm">Country</label>
										<div className="relative shadow">
											<select className="w-full block border border-grey-light p-3 rounded">
												<option>United Kingdom</option>
											</select>
										</div>
									</div>

									<div className="flex flex-wrap -mx-3">
										<div className="w-full sm:w-1/2 px-3">
											<div className="mb-5">
												<label className="block mb-2 font-bold text-sm">County</label>
												<div className="relative shadow">
													<input type="text" className="w-full block border border-grey-light p-3 rounded" />
												</div>
											</div>
										</div>
										<div className="w-full sm:w-1/2 px-3">
											<div className="mb-5">
												<label className="block mb-2 font-bold text-sm">Postcode</label>
												<div className="relative shadow">
													<input type="text" className="w-full block border border-grey-light p-3 rounded" />
												</div>
											</div>
										</div>
									</div>
								</fieldset>

								<fieldset>
									<h2 className="mb-5 text-md">Payment Method</h2>

									<div className="mb-5 bg-white">
										<label className="block p-4 rounded shadow border cursor-pointer hover:bg-grey-lighter">
											<span className="flex justify-between items-center">
												<span className="whitespace-no-wrap">
													<input className="inline-block" name="payment-method" type="radio" value="card" />
													<span className="inline-block ml-2 text-sm font-bold">Credit card</span>
												</span>
												<span className="w-2/5">
													<img className="block" src="./img/credit-cards.png" alt="Visa, Mastercard, American Express, Discover" />
												</span>
											</span>
										</label>
									</div>

									<div className="pb-5">
										<div className="mb-5">
											<label className="block mb-2 font-bold text-sm">Card Number</label>
											<div className="relative shadow">
												<img className="block border rounded absolute pin-t pin-r w-12 mt-2 mr-2" src="./img/visa-card.png" alt="Visa" />
												<input type="text" className="w-full block border border-grey-light p-3 rounded pr-20" />
											</div>
										</div>
									</div>

									<div className="flex flex-wrap -mx-3 mb-5">
										<div className="w-full sm:w-1/2 md:w-3/5 px-3">
											<p className="block mb-2 font-bold text-sm">Expiration Date</p>
											<div className="flex flex-wrap -mx-3">
												<div className="px-3 w-1/2">
													<div className="mb-5">
														<label className="visuallyhidden">Month</label>
														<div className="relative shadow">
															<select className="w-full block border border-grey-light p-3 rounded">
																<option>Month</option>
															</select>
														</div>
													</div>
												</div>
												<div className="px-3 w-1/2">
													<div className="mb-5">
														<label className="visuallyhidden">Year</label>
														<div className="relative shadow">
															<select className="w-full block border border-grey-light p-3 rounded">
																<option>Year</option>
															</select>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="w-full sm:w-1/2 md:w-2/5 px-3">
											<div className="mb-5">
												<label className="block mb-2 font-bold text-sm">CCV</label>
												<div className="relative shadow">
													<input type="text" className="w-full block border border-grey-light p-3 rounded" />
												</div>
											</div>
										</div>
									</div>

									<div className="mb-5 bg-white">
										<label className="block p-4 rounded shadow border cursor-pointer hover:bg-grey-lighter">
											<span className="flex justify-between items-center">
												<span className="whitespace-no-wrap">
													<input className="inline-block" name="payment-method" type="radio" value="paypal" />
													<span className="inline-block ml-2 text-sm font-bold">PayPal</span>
												</span>
												<span className="w-2/5 text-right">
													<img className="inline-block" style={{ maxWidth: '100px' }} src="./img/paypal.png" alt="PayPal" />
												</span>
											</span>
										</label>
									</div>
								</fieldset>

								<label className="flex my-5 items-center cursor-pointer">
									<input className="mr-2" type="checkbox" />
									<span className="text-sm">I have read and agree to the <a className="text-blue font-bold no-underline hover:underline" href="#">terms and conditions</a></span>
								</label>

								<button className="w-full shadow bg-green-dark hover:bg-green text-white font-bold py-4 rounded">Confirm and pay</button>
							</div>
						</form>

						<div className="w-full md:w-1/2 px-3">
							<div className="md:pl-4">
								<div className="bg-white rounded shadow p-5 border border">
									<div className="flex justify-between items-center width-full mb-5 font-light">
										<h2 className="text-md">Basket Summary</h2>
										<a className="text-sm text-blue font-bold no-underline hover:underline" href="#">Edit</a>
									</div>

									<div className="border-b py-5">
										<div className="flex -mx-3 justify-between width-full">
											<div className="px-3">
												<span className="block mb-2 font-semibold text-sm">Product Title</span>
												<p className="block text-sm leading-normal text-grey-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
											</div>
											<div className="px-3">
												<span className="font-semibold text-sm">&pound;888.88</span>
											</div>
										</div>
									</div>

									<div className="border-b py-5">
										<div className="flex -mx-3 justify-between width-full">
											<div className="px-3">
												<span className="block mb-2 font-semibold text-sm">Product Title</span>
												<p className="block text-sm leading-normal text-grey-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
											</div>
											<div className="px-3">
												<span className="font-semibold text-sm">&pound;888.88</span>
											</div>
										</div>
									</div>

									<div className="pt-5 text-right text-md">
										<span>Total:</span>
										<span className="font-semibold">£888.88</span>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</Fragment>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

// Hot Module Replacement
if (module.hot) {
	module.hot.accept();
}



