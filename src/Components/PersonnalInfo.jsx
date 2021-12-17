import React from "react";

export class PersonnalInfo extends React.Component {
	style = { borderRadius: "1rem" };

	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};

	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};

	render() {
		return (
			<div className="bg-light">
				<div className="container py-5 h-100">
					<div className="row d-flex justify-content-center align-items-center h-100">
						<div className="col-12 col-md-8 col-lg-8 col-xl-8">
							<div className="card shadow-2-strong" style={this.style}>
								<div className="card-body p-5 text-center">
									<h3 className="mb-3">
										Step 2: personnal Informations :
									</h3>

									<hr className="my-4" />

									<div id="tab">
										<div className="form-floating mb-3">
											<input
												type="number"
												className="form-control"
												id="CIN"
												placeholder="CIN"
												required
											/>
											<label for="CIN">
												Identity card number
											</label>
										</div>

										<div className="row">
											<div className="form-floating mb-3 col-6">
												<input
													type="text"
													className="form-control"
													id="city"
													placeholder="City"
													required
												/>
												<label for="city">City</label>
											</div>

											<div className="form-floating mb-3 col-6">
												<select
													type="text"
													className="form-select"
													id="state"
													placeholder="state"
													required
												>
													<option
														selected
														value="Ariana"
													>
														Ariana
													</option>
													<option value="Beja">
														Beja
													</option>
													<option value="Ben Arous">
														Ben Arous
													</option>
													<option value="Bizerte">
														Bizerte
													</option>
													<option value="Gabes">
														Gabes
													</option>
													<option value="Nabel">
														Nabel
													</option>
													<option value="Jendouba">
														Jendouba
													</option>
													<option value="Kairouan">
														Kairouan
													</option>
													<option value="kasserin">
														Kasserin
													</option>
													<option value="Kebili">
														Kebili
													</option>
													<option value="Kef">
														Kef
													</option>
													<option value="Mahdia">
														Mahdia
													</option>
													<option value="Manouba">
														Manouba
													</option>
													<option value="Medenine">
														Medenine
													</option>
													<option value="Monastir">
														Monastir
													</option>
													<option value="Gafsa">
														Gafsa
													</option>
													<option value="Sfax">
														Sfax
													</option>
													<option value="Sidi Bouzid">
														Sidi Bouzid
													</option>
													<option value="Siliana">
														Siliana
													</option>
													<option value="Sousse">
														Sousse
													</option>
													<option value="Tataouine">
														Tataouine
													</option>
													<option value="Tozeur">
														Tozeur
													</option>
													<option value="Tunis">
														Tunis
													</option>
													<option value="Zaghouan">
														Zaghouan
													</option>
												</select>
												<label for="state">State</label>
											</div>
										</div>

										<div className="row">
											<div className="form-floating mb-3 col-6">
												<input
													type="text"
													className="form-control"
													id="Adress1"
													placeholder="Adress 1"
													required
												/>
												<label for="Adress1">
													Adress 1
												</label>
											</div>

											<div className="form-floating mb-3 col-6">
												<input
													type="text"
													className="form-control"
													id="Adress2"
													placeholder="Adress 2"
												/>
												<label for="Adress2">
													Adress 2
												</label>
											</div>
										</div>

										<div className="form-floating mb-3">
											<input
												type="number"
												className="form-control"
												id="Zip"
												placeholder="Zip"
												required
											/>
											<label for="Zip">ZIP Code</label>
										</div>

										<hr className="my-4" />

										<div class="d-grid gap-2 d-block">
											<button
												className="w-100 btn btn btn-outline-primary"
												type="submit"
												onClick={this.back}
											>
												previous
											</button>
											<button
												className="w-100 btn btn btn-primary"
												type="submit"
												onClick={this.continue}
											>
												Next
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default PersonnalInfo;
