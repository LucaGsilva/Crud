using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace ManagerUser
{
    public class ApplicationResult
    {
        public ApplicationResult()
        {
            Code = (int) HttpStatusCode.OK;
            Messages = "OK";
        }


        [JsonProperty("code")]
        public int Code { get; set; }

        [JsonProperty("messages")]
        public string Messages { get; set; }

        [JsonProperty("data")]
        public object Data { get; set; }
    }
}