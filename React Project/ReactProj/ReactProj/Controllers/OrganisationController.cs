using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using VaultexProj.Models;
using Microsoft.AspNetCore.Hosting;

namespace VaultexProj.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrganisationController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public OrganisationController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]

        public JsonResult Get()
        {
            string query = @"
                    select OrganisationName, OrganisationNumber, AddressLine1, AddressLine2, AddressLine3, AddressLine4, Town, Postcode, OrganisationId from dbo.InterviewData";
            DataTable table = new DataTable();
            string sqldataSource = _configuration.GetConnectionString("OrganisationAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqldataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();

                }

            }

            return new JsonResult(table);
        }
        [HttpPut]
        public JsonResult Put(Organisation org)
        {
            string query = @"

                    update dbo.InterviewData set
                                            OrganisationName = '" + org.OrganisationName + @"'
                                            OrganisationNumber = '" + org.OrganisationNumber + @"'
                                            AddressLine1 = '" + org.AddressLine1 + @"'
                                            AddressLine2 = '" + org.AddressLine2 + @"'
                                            AddressLine3 = '" + org.AddressLine3 + @"'
                                            AddressLine4 = '" + org.AddressLine4 + @"'
                                            Town = '" + org.Town + @"'
                                            Postcode = '" + org.Postcode + @"'
                                            OrganisationId = '" + org.OrganisationId + @"'

                                            where OrganisationId = " + org.OrganisationId + @"";

            DataTable table = new DataTable();
            string sqldataSource = _configuration.GetConnectionString("OrganisationAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqldataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();

                }

            }
            return new JsonResult("Organisation's Details Updated Successfully");
        }
        [HttpPost]
        public JsonResult Post(Organisation org)
        {
            string query = @"

                    insert into dbo.InterviewData 

                    (OrganisationName, OrganisationNumber, AddressLine1, AddressLine2,
                    AddressLine3, AddressLine4, Town, Postcode, OrganisationId)

                    values(
                                            '" + org.OrganisationName + @"'
                                            '" + org.OrganisationNumber + @"'
                                            '" + org.AddressLine1 + @"'
                                            '" + org.AddressLine2 + @"'
                                            '" + org.AddressLine3 + @"'
                                            '" + org.AddressLine4 + @"'
                                            '" + org.Town + @"'
                                            '" + org.Postcode + @"'
                                            '" + org.OrganisationId + @"'
                          )";

            DataTable table = new DataTable();
            string sqldataSource = _configuration.GetConnectionString("OrganisationAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqldataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();

                }

            }
            return new JsonResult("Organisation's Details Updated Successfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                    delete from dbo.InterviewData
                    where OrganisationId = " + id + @"";

            DataTable table = new DataTable();
            string sqldataSource = _configuration.GetConnectionString("OrganisationAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqldataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();

                }

            }
            return new JsonResult("Organisation's Details Deleted Successfully");
        }
    
        //[Route("GetAllOrganisationNames")]
        //public JsonResult GetAllOrganisationNames()
        //{
        //    string query = @"
        //            select OrganisationName from dbo.InterviewData
        //            ";
        //    DataTable table = new DataTable();
        //    string sqldataSource = _configuration.GetConnectionString("OrganisationAppCon");
        //    SqlDataReader myReader;
        //    using (SqlConnection myCon = new SqlConnection(sqldataSource))
        //    {
        //        myCon.Open();
        //        using (SqlCommand myCommand = new SqlCommand(query, myCon))
        //        {
        //            myReader = myCommand.ExecuteReader();
        //            table.Load(myReader); ;

        //            myReader.Close();
        //            myCon.Close();

        //        }

        //    }
        //}
    }
}

