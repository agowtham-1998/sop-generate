import React, { useState } from 'react';
import axios from 'axios';
import './SOPForm.css';
import { useNavigate } from 'react-router-dom'; 

function SOPForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    educationLevel: '',
    institute: '',
    studyField: '',
    workExperience: '',
    jobTitle: '',
    companyName: '',
    jobDuties: '',
    canadianInstitute: '',
    programOfStudy: '',
    applyingFrom: '',
    futureGoals: '',
    listeningScore: '',
    readingScore: '',
    speakingScore: '',
    writingScore: '',
    paidFirstYearTuition: '',
    didGIC: '',
    gicAmount: '',

    listeningScoreOptional: true,
    readingScoreOptional: true,
    speakingScoreOptional: true,
    writingScoreOptional: true,
  });

  const prodUrl = "https://sop-generator-be646487802e.herokuapp.com/";

  // const localUrl = 'http://localhost:3001/generate-sop';

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate that name and email are not empty
    if (!formData.name || !formData.email) {
      alert('Name and email are required fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(`${prodUrl}`, formData);

      if (response.status === 200) {
        console.log('SOP generated and email sent.', response);
        // Handle success (e.g., show a success message)
        navigate('/thank-you');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle error (e.g., show an error message)
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (

    <div className="container">
          <form className="sop-form" onSubmit={handleSubmit}>
            <h1 className="text-center mb-4">Student Statement of Generator</h1>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="educationLevel">Highest Level of Education:</label>
              <select
                id="educationLevel"
                name="educationLevel"
                value={formData.educationLevel}
                onChange={handleChange}
                className="form-control"
                required
              >
                <option value="">Select</option>
                <option value="High School">High School</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="Master's Degree">Master's Degree</option>
                <option value="Ph.D.">Ph.D.</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="institute">Institute where you completed your highest level of education:</label>
              <input
                type="text"
                id="institute"
                name="institute"
                value={formData.institute}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="studyField">What did you study:</label>
              <input
                type="text"
                id="studyField"
                name="studyField"
                value={formData.studyField}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="workExperience">Do you have any relevant work experience?</label>
              <div className="form-check">
                <input
                  type="radio"
                  id="workExperienceYes"
                  name="workExperience"
                  value="Yes"
                  checked={formData.workExperience === 'Yes'}
                  onChange={handleChange}
                  className="form-check-input"
                  required
                />
                <label className="form-check-label" htmlFor="workExperienceYes">Yes</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  id="workExperienceNo"
                  name="workExperience"
                  value="No"
                  checked={formData.workExperience === 'No'}
                  onChange={handleChange}
                  className="form-check-input"
                  required
                />
                <label className="form-check-label" htmlFor="workExperienceNo">No</label>
              </div>
            </div>

            {formData.workExperience === 'Yes' ? (
              <div>
                <div className="form-group">
                  <label htmlFor="jobTitle">Job Title:</label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="companyName">Company Name:</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="jobDuties">Job Duties:</label>
                  <textarea
                    id="jobDuties"
                    name="jobDuties"
                    value={formData.jobDuties}
                    onChange={handleChange}
                    className="form-control"
                    rows="4"
                    required
                  ></textarea>
                </div>
              </div>
            ) : (
              <div className="form-group">
                <label>No work experience provided</label>
              </div>
            )}



            <div className="form-group">
              <label htmlFor="canadianInstitute">What institute did you get admitted to in Canada?</label>
              <input
                type="text"
                id="canadianInstitute"
                name="canadianInstitute"
                value={formData.canadianInstitute}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="programOfStudy">What is your program of study in Canada?</label>
              <input
                type="text"
                id="programOfStudy"
                name="programOfStudy"
                value={formData.programOfStudy}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="applyingFrom">Which country are you applying from?</label>
              <input
                type="text"
                id="applyingFrom"
                name="applyingFrom"
                value={formData.applyingFrom}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="futureGoals">What are your future goals?</label>
              <textarea
                id="futureGoals"
                name="futureGoals"
                value={formData.futureGoals}
                onChange={handleChange}
                className="form-control"
                rows="4"
                required
              ></textarea>
            </div>

        <div className="form-group">
          <label htmlFor="listeningScore">English Scores - Listening{formData.listeningScoreOptional && <span className="optional-label">(Optional)</span>}:</label>
          <input
            type="text"
            id="listeningScore"
            name="listeningScore"
            value={formData.listeningScore}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="readingScore">English Scores - Reading{formData.readingScoreOptional && <span className="optional-label">(Optional)</span>}:</label>
          <input
            type="text"
            id="readingScore"
            name="readingScore"
            value={formData.readingScore}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="speakingScore">English Scores - Speaking{formData.speakingScoreOptional && <span className="optional-label">(Optional)</span>}:</label>
          <input
            type="text"
            id="speakingScore"
            name="speakingScore"
            value={formData.speakingScore}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="writingScore">English Scores - Writing{formData.writingScoreOptional && <span className="optional-label">(Optional)</span>}:</label>
          <input
            type="text"
            id="writingScore"
            name="writingScore"
            value={formData.writingScore}
            onChange={handleChange}
            className="form-control"
          />
        </div>


            <div className="form-group">
              <label>Did you pay your first year tuition?</label>
              <div className="form-check">
                <input
                  type="radio"
                  id="tuitionYes"
                  name="paidFirstYearTuition"
                  value="Yes"
                  checked={formData.paidFirstYearTuition === 'Yes'}
                  onChange={handleChange}
                  className="form-check-input"
                  required
                />
                <label className="form-check-label" htmlFor="tuitionYes">Yes</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  id="tuitionNo"
                  name="paidFirstYearTuition"
                  value="No"
                  checked={formData.paidFirstYearTuition === 'No'}
                  onChange={handleChange}
                  className="form-check-input"
                  required
                />
                <label className="form-check-label" htmlFor="tuitionNo">No</label>
              </div>
            </div>

            <div className="form-group">
              <label>Did you do a GIC?</label>
              <div className="form-check">
                <input
                  type="radio"
                  id="gicYes"
                  name="didGIC"
                  value="Yes"
                  checked={formData.didGIC === 'Yes'}
                  onChange={handleChange}
                  className="form-check-input"
                  required
                />
                <label className="form-check-label" htmlFor="gicYes">Yes</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  id="gicNo"
                  name="didGIC"
                  value="No"
                  checked={formData.didGIC === 'No'}
                  onChange={handleChange}
                  className="form-check-input"
                  required
                />
                <label className="form-check-label" htmlFor="gicNo">No</label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="gicAmount">How much did you pay towards GIC?</label>
              <input
                type="text"
                id="gicAmount"
                name="gicAmount"
                value={formData.gicAmount}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Generating...' : 'Generate SOP'}
              </button>
            </div>
          </form>
    </div>
  );
}

export default SOPForm;
