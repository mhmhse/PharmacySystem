import React, { Component } from "react";

import TextFieldGroup from "../common/TextFieldGroup";
import SelectListGroup from "../common/SelectListGroup";
import axios from "axios";

class addDrug extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brandName: "",
      genericName: "",
      dosage: "",
      category: "",
      type: "",
      unitPrice: "",
      sellingPrice: "",
      dangerLevel: "",
      reorderLevel: "",
      supplier: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const drugData = {
      Brand_name: this.state.brandName,
      Generic_name: this.state.genericName,
      Dosage: this.state.dosage,
      Category: this.state.category,
      Type: this.state.type,
      Unit_price: this.state.unitPrice,
      Selling_price: this.state.sellingPrice,
      Danger_level: this.state.dangerLevel,
      Reorder_level: this.state.reorderLevel,
      Supplier: this.state.supplier
    };
    // Add drug

    axios
      .post("http://localhost:8080/drug", drugData)
      .then(res => {
        console.log(drugData);
      })
      .catch(err => {
        console.log(err);
      });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const options = [
      { label: "* Select category", value: 0 },
      { label: "headache", value: "headache" },
      { label: "cold & flu", value: "cold & flu" },
      { label: "Allergic", value: "Allergic" },
      { label: "Nausea", value: "Nausea" },
      { label: "Diarrhoea", value: "Diarrhoea" },
      { label: "Rashes", value: "Rashes" },
      { label: "Sore throat", value: "Sore throat" },
      { label: "Other", value: "Other" }
    ];
    // Select options for drug type

    const type = [
      { label: "* Select type", value: 0 },
      { label: "Tablet", value: "Tablet" },
      { label: "Ointment", value: "Ointment" },
      { label: "Spray", value: "Spray" },
      { label: "Injection", value: "Nausea" },
      { label: "Gel", value: "Gel" },
      { label: "Syrup", value: "Syrup" },
      { label: "Other", value: "Other" }
    ];

    return (
      <div className="landing-inner">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Drug</h1>

              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  info="Brand Name"
                  placeholder="Brand Name"
                  name="brandName"
                  value={this.state.brandName}
                  onChange={this.onChange}
                />
                <TextFieldGroup
                  placeholder="Generic Name"
                  name="genericName"
                  value={this.state.genericName}
                  onChange={this.onChange}
                  info="Generic Name"
                />
                <TextFieldGroup
                  placeholder="Dosage"
                  name="dosage"
                  value={this.state.dosage}
                  onChange={this.onChange}
                  info="Dosage"
                />
                <SelectListGroup
                  placeholder="Category"
                  name="category"
                  value={this.state.category}
                  onChange={this.onChange}
                  options={options}
                  info="Drug Category"
                />
                <SelectListGroup
                  placeholder="Type"
                  name="type"
                  value={this.state.type}
                  onChange={this.onChange}
                  options={type}
                  info="Drug Type"
                />

                <TextFieldGroup
                  placeholder="Unit price"
                  name="unitPrice"
                  value={this.state.unitPrice}
                  onChange={this.onChange}
                  info="Unit Price"
                />
                <TextFieldGroup
                  placeholder="Selling price"
                  name="sellingPrice"
                  value={this.state.sellingPrice}
                  onChange={this.onChange}
                  info="Selling Price"
                />
                <TextFieldGroup
                  placeholder="Danger Level"
                  name="dangerLevel"
                  value={this.state.dangerLevel}
                  onChange={this.onChange}
                  info="Danger Level"
                />
                <TextFieldGroup
                  placeholder="Reorder Level"
                  name="reorderLevel"
                  value={this.state.reorderLevel}
                  onChange={this.onChange}
                  info="Reorder Level"
                />
                <TextFieldGroup
                  placeholder="Supplier"
                  name="supplier"
                  value={this.state.supplier}
                  onChange={this.onChange}
                  info="Supplier"
                />

                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                  onClick={this.addDrug}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default addDrug;
