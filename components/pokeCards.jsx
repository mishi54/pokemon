import React from 'react'

export const PokeCards = ({data}) => {
  return (
    <li className="pokemon-card">
    <figure>
      <img
        src={data.sprites.other.dream_world.front_default}
        alt={data.name}
        className="pokemon-image"
      />
    </figure>
    <h1 className="pokemon-name">{data.name}</h1>
    <div className="pokemon-info pokemon-highlight">
        <p>
          {data.types.map((curType) => curType.type.name).join(", ")}
        </p>
      </div>

      <div className="grid-three-cols">
        <p className="pokemon-info">
          <span> Height:</span> {data.height}
        </p>
        <p className="pokemon-info">
          <span> Weight:</span> {data.weight}
        </p>
        <p className="pokemon-info">
          <span> speed:</span> {data.stats[5].base_stat}
        </p>
      </div>
      <div className="grid-three-cols">
      <div className="pokemon-info">
          <p>{data.base_experience}</p>
          <span> Experience:</span>
        </div>
        <div className="pokemon-info">
          <p>{data.stats[1].base_stat}</p>
          <span>Attack:</span>
        </div>
        <div className="pokemon-info">
          <p>
            {data.abilities
              .map((abilityInfo) => abilityInfo.ability.name)
              .slice(0, 1)
              .join(", ")}
          </p>
          <span> Abilities: </span>
      </div>
      </div>
    </li>
  )
}

