import React from "react";
import { Link } from "react-router-dom";
export class FinalStep extends React.Component {
	style = { borderRadius: "1rem" };

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
							<div
								className="card shadow-2-strong"
								style={this.style}
							>
								<div className="card-body p-5 text-center">
									<h3 className="mb-3">Finel step: just a bit more..</h3>

									<hr className="my-4" />

									<div id="tab">
										<div className="form-floating mb-3">
											<select
												type="text"
												className="form-select"
												id="state"
												placeholder="Sexe"
												required
											>
												<option selected value="Male">
													Male
												</option>
												<option value="Female">
													Female
												</option>
											</select>
											<label for="Sexe">Sexe</label>
										</div>

										<div className="form-floating mb-3">
											<input
												type="date"
												className="form-control"
												id="BirthDate"
												placeholder="Birth date"
												required
											/>
											<label for="BirthDate">
												Birth date
											</label>
										</div>

										<div className="form-floating mb-3">
											<input
												type="number"
												className="form-control"
												id="PhoneNumber"
												placeholder="Phone Number"
												required
											/>
											<label for="PhoneNumber">
												Phone Number
											</label>
										</div>

                                        <hr className="my-4"/>
                                        <div class="d-grid gap-2 d-block">
                                            <button className="w-100 btn btn btn-outline-primary" type="submit" onClick={this.back}>previous</button>
                                            <Link to="/UDB">
                                            <button className="w-100 btn btn btn-primary" type="submit" >Confirm</button>
                                            </Link>
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

export default FinalStep;
