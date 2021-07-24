using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PaymentDetailsWebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PaymentDetailsWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentDetailController : ControllerBase
    {
        private readonly PaymentDetailContext _context;
        public PaymentDetailController(PaymentDetailContext context) { 
 
            _context = context;
        }

        [HttpGet]
        public IEnumerable<PaymentDetail> GetPaymentDetails()
        {
            return _context.PaymentDetails.ToList();
        }
    }
}
