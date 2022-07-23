using System;
using System.Text.Json.Serialization;

namespace Model
{
    public class User
    {
       
        public int Id { get; set; }
       
        public string Name { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public DateTime BirthDate { get; set; }

        public int Schooling { get; set; }

        [JsonIgnore]
        public bool Active { get; set; } = true;

    }
}
